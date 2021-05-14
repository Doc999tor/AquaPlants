import {useState} from 'react';
import Header from '../Header/Header';
import CartItem from './CartItem/CartItem';
import Footer from '../Footer/Footer';

import s from './Cart.module.css';

const Cart = () => {
  const [data, setData] = useState([
    {
      id: 5,
      name: 'Plant name',
      photo: ['photo1', 'photo2'],
      description: 'Stems Per Pot: 1Common Name: DownoiPlant Use: Foreground Difficulty Level: Medium Light Demand: Medium Co2 Demand: Medium Fertilizer Demand: Medium',
      price: 10,
      discount_price: 5,
      qty_stock: 5 // 0 is not in stock
    },
    {
      id: 6,
      name: 'Plant name',
      photo: ['photo2', 'photo3'],
      description: 'Plant description',
      price: 10,
      discount_price: 0,
      qty_stock: 5 // 0 is not in stock
    },
    {
      id: 16,
      name: 'Plant name',
      photo: ['photo3', 'photo4'],
      description: 'Plant description',
      price: 10,
      discount_price: 10,
      qty_stock: 5 // 0 is not in stock
    },
    {
      id: 7,
      name: 'Plant name',
      photo: ['photo4', 'photo1'],
      description: 'Plant description',
      price: 10,
      discount_price: 5,
      qty_stock: 0 // 0 is not in stock
    },
  ]);
  return (
    <div className={s.Cart}>
      <Header cart />
      <div className={s.Body}>
        <h2 className={s.Title}>{config.translations.cart_title}</h2>
        <ul className={s.List}>
          {data?.map(i => <CartItem key={i.id} i={i} />)}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
