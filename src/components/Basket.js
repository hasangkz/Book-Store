import React, { useEffect, useState } from 'react';
import '../style/basket.css';

export const Basket = ({ basket, setBasket, changeBasket }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const newBasket = basket.filter((item) => item.id !== id);
    setBasket(newBasket);
    handlePrice();
  };

  const handlePrice = () => {
    let total = 0;
    basket.map((item) => (total += item.price * item.amount));
    setPrice(total);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {basket.map((item) => (
        <div className='basket_box' key={item.id}>
          <div className='basket_img'>
            <img src={item.img} alt='book' />
          </div>
          <p>{item.title}</p>
          <div>
            <button onClick={() => changeBasket(item, -1)}>-</button>
            <span>{item.amount}</span>
            <button onClick={() => changeBasket(item, 1)}>+</button>
          </div>
          <div>
            <span className='price'>${item.price}</span>
            <button className='myButton' onClick={() => handleRemove(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}

      {price ? (
        <div className='total'>
          <span>Total Payment</span>
          <span>${price}</span>
        </div>
      ) : (
        <h1 className='warn'>The basket is empty! Please add product...</h1>
      )}
    </article>
  );
};
