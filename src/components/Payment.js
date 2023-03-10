import React, { useState, useEffect } from 'react';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './Axios';

function Payment() {

  const [{basket, user}, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
      
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret();

  }, [basket])

  const handleSubmit = async(e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replaceState('/orders')
    })
  }

  const handleChange = e => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
        Элементы  (<Link to='/checkout'>{basket?.length} оформления заказа</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Адрес доставки</h3>
          </div>
          <div className="payment__address">
            <p>{user ? user.email : 'Guest'}</p>
            <p>Акмолинская область, г.Астана</p>
            <p>ул. Тауелсиздик 52</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Просмотрите товары и доставку</h3>
          </div>
          <div className="payment__items">
            {basket.map(item => (
              <CheckoutProduct
                id = {item.id}
                img = {item.img}
                title = {item.title}
                price = {item.price}
                rating = {item.rating}
              />
            ))
            }
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Метод платежа</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Order Total: <strong>{value}</strong>
                      </p>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />

                <button disabled={ processing || disabled || succeeded }>
                  <span>{processing ? <p>Загрузка</p> : "Купить сейчас"}</span>
                </button>
              </div>
              
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
        

      </div>
      
    </div>
  )
}

export default Payment;
