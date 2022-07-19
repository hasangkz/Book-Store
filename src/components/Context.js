import React from 'react';
import { createContext } from 'react';
export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const data = [
    {
      id: 1,
      title: 'Altıncı Koğuş',
      author: ' Anton Pavloviç Çehov',
      price: 12,
      img: 'https://i.dr.com.tr/cache/500x400-0/originals/0001717354001-1.jpg',
      amount: 1,
    },
    {
      id: 2,
      title: 'Kızıl Veba',
      author: 'Jack London',
      price: 15,
      img: 'https://i.dr.com.tr/cache/500x400-0/originals/0001872902001-1.jpg',
      amount: 1,
    },
    {
      id: 3,
      title: 'Fareler ve İnsanlar',
      author: 'John Steinbeck',
      price: 20,
      img: 'https://i.dr.com.tr/cache/500x400-0/originals/0000000411500-1.jpg',
      amount: 1,
    },
    {
      id: 4,
      title: 'Beyaz Zambaklar Ülkesinde',
      author: 'Grigory Petrov',
      price: 10,
      img: 'https://i.dr.com.tr/cache/500x400-0/originals/0001917612001-1.jpg',
      amount: 1,
    },
    {
      id: 5,
      title: 'Hayvan Çiftliği',
      author: 'George Orwell',
      price: 5,
      img: 'https://i.dr.com.tr/cache/500x400-0/originals/0001903207001-1.jpg',
      amount: 1,
    },
    {
      id: 6,
      title: 'Bir Delinin Hatıra Defteri',
      author: 'Nikolay Vasilyeviç Gogol',
      price: 25,
      img: 'https://i.dr.com.tr/cache/500x400-0/originals/0001796729001-1.jpg',
      amount: 1,
    },
    {
      id: 7,
      title: 'Uğultulu Tepeler',
      author: 'Emily Bronte',
      price: 20,
      img: 'https://i.dr.com.tr/cache/500x400-0/originals/0001788080001-1.jpg',
      amount: 1,
    },
    {
      id: 8,
      title: 'Beyaz Diş',
      author: 'Jack London',
      price: 10,
      img: 'https://i.dr.com.tr/cache/500x400-0/originals/0000000347422-1.jpg',
      amount: 1,
    },
    {
      id: 9,
      title: 'Mutlu Prens',
      author: 'Oscar Wilde',
      price: 6,
      img: 'https://i.dr.com.tr/cache/500x400-0/originals/0001703855001-1.jpg',
      amount: 1,
    },
    {
      id: 10,
      title: 'Yıldız Gezgini',
      author: 'Jack London',
      price: 30,
      img: 'https://i.dr.com.tr/cache/500x400-0/originals/0000000622480-1.jpg',
      amount: 1,
    },
    {
      id: 11,
      title: 'İnsancıklar ',
      author: 'Fyodor Mihayloviç Dostoyevski',
      price: 8,
      img: 'https://i.dr.com.tr/cache/500x400-0/originals/0001972233001-1.jpg',
      amount: 1,
    },
    {
      id: 12,
      title: 'Macellan',
      author: ' Stefan Zweig',
      price: 28,
      img: 'https://i.dr.com.tr/cache/500x400-0/originals/0001870906001-1.jpg',
      amount: 1,
    },
  ];

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
