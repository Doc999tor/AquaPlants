import { useState } from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import s from './styles.module.css';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

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
  const handleHideCart = () => setShowCart(false);
  return (
    <div className={s.App}>
      <Header onShowCart={handleShowCart} cart={cart} />
      <main>
        <div className={s.Aqua} style={{backgroundImage: `url('${config.urls.media}aquarium.png')`}}>
          <div className={s.Texts}>
            <h2 className={s.Title}>{config.translations.site_title}</h2>
            <p className={s.Subtitle}>{config.translations.site_subtitle}</p>
          </div>
        </div>
        <Shop onAddToCart={handleAddToCart} />
      </main>
      {showCart && <Cart onHideCart={handleHideCart} cart={cart} />}
      <Footer />
    </div>
  );
}

export default App;
