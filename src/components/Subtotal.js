import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
  const history = useHistory();
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
            Промежуточный итог ({basket.length} items): <strong>{value}</strong>
            </p>

            <small className="subtotal__gift">
              <input type="checkbox" /> Этот заказ содержит подарок
            </small>
            
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e => history.push('/payment')}>Перех к оформлению заказа </button>
    </div>
  )
}

export default Subtotal;
