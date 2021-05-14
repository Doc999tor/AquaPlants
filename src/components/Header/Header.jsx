import s from './Header.module.css';

const Header = ({ cart = false }) => {
  return (
    <header className={s.Header + (cart ? ` ${s.Cart_header}` : '')}>
      <div className={s.Cont}>
        <div className={s.Group}>
          <div className={s.Cart}>
            <span className={s.Cart_value}>1234{config.currency}</span>
            <span className={s.Circle}>
              <img src={`${config.urls.media}shopping-bag.svg`} alt='' />
              <span className={s.Cart_count}>10</span>
            </span>
          </div>
          <a className={s.Phone} href={`tel:${config.phone}`}>
            <span className={`${s.Circle} ${s.Call}`}>
              <img src={`${config.urls.media}phone-call.svg`} alt='' />
            </span>
            <span className={s.Phone_value}>{config.phone}</span>
          </a>
        </div>
        <div className={s.Group}>
          <label className={s.Search_input}><img src={`${config.urls.media}search.svg`} alt='' />
            <input type='text' placeholder={config.translations.search_placeholder} />
          </label>
          <a href='#'><img className={s.Logo} src={`${config.urls.media}${cart ? 'logo-color' : 'logo'}.png`} alt='logo' /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;