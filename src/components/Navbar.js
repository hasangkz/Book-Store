import React from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import '../style/navbar.css';
export const Navbar = ({ setShowBasket, count }) => {
  return (
    <nav>
      <div className='nav_box'>
        <span className='my_shop' onClick={() => setShowBasket(false)}>
          SHOOP
        </span>
        <div className='basket' onClick={() => setShowBasket(true)}>
          <span>
            <FaShoppingBasket />
          </span>
          <span>{count ? count : null}</span>
        </div>
      </div>
    </nav>
  );
};
