import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='container mx-auto'>
      <div className="checkout ">
      <div className="checkout__left">
        <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
        <div>
          <h3>Привет, {user ? user.email : 'Guest'}</h3>
          <h2 className="checkout__title">Ваша корзина:</h2>
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
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
    </div>
  )
}

export default Checkout;
