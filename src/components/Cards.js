import React from 'react';
import { useContext } from 'react';
import { DataContext } from './Context';
import { Card } from './Card';
import '../style/cards.css';
export const Cards = ({ display }) => {
  const data = useContext(DataContext);
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <Card item={item} display={display} />
        </li>
      ))}
    </ul>
  );
};
