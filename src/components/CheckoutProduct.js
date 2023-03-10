import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, img, title, price, rating }) {
  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id,
    })
  }

  return (
    <div className='checkoutProduct border border-gray-200 rounded-lg'>
      <img src={img} alt='image product' className='checkoutProduct__image' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating).fill().map((_, i) => ( 
              <StarIcon />
            ))
          }
        </div>
        <button className='px-5' onClick={removeFromBasket}>Удалить с корзины</button>
      </div>
      
    </div>
  )
}

export default CheckoutProduct;
