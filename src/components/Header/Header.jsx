import s from './Header.module.css';

const Header = ({ cartMode = false, onShowCart, cart = [], sum, filter, onChangeFilter }) => {
  return (
    <header className={s.Header + (cartMode ? ` ${s.Cart_header}` : '')}>
      <div className={s.Cont}>
        <div className={s.Group}>
          <div className={s.Cart} onClick={onShowCart}>
            <span className={s.Cart_value}>{sum}{config.currency}</span>
            <span className={s.Circle}>
              <img className={s.Img} src={`${config.urls.media}shopping-cart-outline.svg`} alt='cart' />
              {cart?.length > 0 && <span className={s.Cart_count}>{cart?.length}</span>}
            </span>
          </div>
          <a className={s.Phone} href={`https://wa.me/${config.phone.slice(1)}`}>
            <span className={`${s.Circle} ${s.Call}`}>
              <img src={`${config.urls.media}whatsapp.svg`} alt='whatsapp' />
            </span>
            <span className={s.Phone_value}>{config.phone}</span>
          </a>
        </div>
        <div className={s.Group}>
          {!cartMode && (
            <label className={s.Search_input}><img src={`${config.urls.media}search.svg`} alt='search'/>
              <input type='text' placeholder={config.translations.search_placeholder} aria-label={config.translations.search_placeholder} value={filter} onChange={onChangeFilter}/>
            </label>
          )}
          <a href='#'><img className={s.Logo} src={`${config.urls.media}${cartMode ? 'logo-color' : 'aquaplants'}.jpg`} alt='logo' /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
