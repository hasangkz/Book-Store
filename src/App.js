import './App.css';
import { Navbar } from './components/Navbar';
import { Cards } from './components/Cards';
import { DataContextProvider } from './components/Context';
import { useState, useEffect } from 'react';
import { Basket } from './components/Basket';
import './App.css';
function App() {
  const [showBasket, setShowBasket] = useState(false);
  const [basket, setBasket] = useState([]);

  const display = (item) => {
    console.log(item);
    const isInBasket = basket.find((data) => data.id === item.id);
    //eğer ürün sepette daha önceden varsa: o ürünün count değerini 1 arttırız.
    //ve bu arttırma işlemi güncellensin diye o ürünü ilk başta sepetten çıkartırız.
    //daha sonra tekrardan sepete yollarız
    if (isInBasket) {
      isInBasket.amount += 1;
      setBasket([...basket.filter((data) => data.id !== item.id), isInBasket]);
    }
    //eklemeye çalışılan ürün ilk defa sepete ekleniyorsa, ona sepeete eklemeden önce count değerini 1 statik değerini veriyoruz
    else {
      setBasket([...basket, item]);
    }
  };

  const changeBasket = (item, number) => {
    console.log('change');
    const array = basket;
    const index = array.indexOf(item);
    array[index].amount += number;
    if (array[index].amount === 0) array[index].amount = 1;
    setBasket([...array]);
  };

  return (
    <DataContextProvider>
      <div className='App'>
        <Navbar setShowBasket={setShowBasket} count={basket.length} />
        {showBasket ? (
          <Basket
            basket={basket}
            changeBasket={changeBasket}
            setBasket={setBasket}
          />
        ) : (
          <Cards display={display} />
        )}
      </div>
    </DataContextProvider>
  );
}

export default App;
