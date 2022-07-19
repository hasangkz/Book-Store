import React from 'react';

export const Card = ({ item, display }) => {
  const { id, title, author, price, img, amount } = item;
  return (
    <div className='cards'>
      <div className='image_box'>
        <img src={img} alt='book' className='image' />
      </div>
      <div className='details'>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <h4>${price}</h4>
        <button onClick={() => display(item)} className='buy'>
          Add to Basket
        </button>
      </div>
    </div>
  );
};
