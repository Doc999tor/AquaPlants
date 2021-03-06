import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.Footer}>
      <div className={s.Wrap}>
        <img className={s.Pay} src={`${config.urls.media}pay.png`} alt='אנחנו מכבדים תשלומים ב-PayPal' />
        <p className={s.C_r}><small>{config.translations.copy_rights?.replace('{year}', new Date().getFullYear())}</small></p>
        <a href='#'><img className={s.Logo} src={`${config.urls.media}logo-color.png`} alt='logo' /></a>
      </div>
    </footer>
  );
};

export default Footer;
