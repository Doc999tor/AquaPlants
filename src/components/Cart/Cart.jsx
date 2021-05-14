import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import CartItem from './CartItem/CartItem';
import Footer from '../Footer/Footer';

import s from './Cart.module.css';

const Cart = ({ onHideCart, cart = [] }) => {
  const handleClosePopup = backFlag => {
    backFlag === 'off' ? false : window.history.back();
    onHideCart();
  };
  const close = () => handleClosePopup('off');
  useEffect(() => {
    document.getElementsByTagName('body')[0].classList.add('hidden');
    history.pushState(null, null, null);
    window.addEventListener('popstate', close);
    return () => {
      document.getElementsByTagName('body')[0].classList.remove('hidden');
      window.removeEventListener('popstate', close);
    };
  }, []);
  return (
    <div className={s.Cart}>
      <Header cartMode cart={cart} />
      <div className={s.Body}>
        <h2 className={s.Title}>{config.translations.cart_title}</h2>
        <ul className={s.List}>
          {cart?.map(i => <CartItem key={i.id} i={i} />)}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
