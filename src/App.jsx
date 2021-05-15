import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import s from './styles.module.css';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [sum, setSum] = useState(0);
  useEffect(() => {
    const total = cart?.reduce((total, i) => {
      const price = i.discount_price <= i.price
        ? i.discount_price == 0 ? 0 : i.discount_price
        : i.price;
      return Number(total) + price * i.amount;
    }, 0);
    setSum(total);
  }, [cart]);
  const handleShowCart = () => {
    if (!showCart) {
      setShowCart(true);
    }
  };
  const handleAddToCart = item => {
    const obj = cart.find(i => i.id == item.id) || {};
    if (obj.id) return;
    setCart(prevState => [...prevState, item]);
  };
  const handleRemoveFromCart = id => setCart(prevState => prevState.filter(i => i.id != id));
  const handleHideCart = () => setShowCart(false);
  const ItemIds = cart?.map(i => i.id);
  const handleIncrementCartItem = id => {
    setCart(prevState => {
      return prevState?.map(item => item.id == id ? {...item, amount: item.amount >= item.qty_stock ? item.amount : item.amount + 1} : item);
    });
  };
  const handleDecrementCartItem = id => {
    setCart(prevState => {
      return prevState?.map(item => item.id == id ? {...item, amount: item.amount <= 1 ? item.amount : item.amount - 1} : item);
    });
  };
  // const handleDecrement = () => {
  //   setAmount(prevState => {
  //     if (prevState <= 1) {
  //       return prevState;
  //     }
  //     return prevState - 1;
  //   });
  // };
  return (
    <div className={s.App}>
      <Header onShowCart={handleShowCart} cart={cart} sum={sum} />
      <main>
        <div className={s.Aqua} style={{backgroundImage: `url('${config.urls.media}aquarium.png')`}}>
          <div className={s.Texts}>
            <h2 className={s.Title}>{config.translations.site_title}</h2>
            <p className={s.Subtitle}>{config.translations.site_subtitle}</p>
          </div>
        </div>
        <Shop
          onAddToCart={handleAddToCart}
          onIncrementCartItem={handleIncrementCartItem}
          onDecrementCartItem={handleDecrementCartItem}
          itemsId={ItemIds}
        />
      </main>
      {showCart && (
        <Cart
          onHideCart={handleHideCart}
          cart={cart}
          sum={sum}
          onRemoveFromCart={handleRemoveFromCart}
          onIncrementCartItem={handleIncrementCartItem}
          onDecrementCartItem={handleDecrementCartItem}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
