import s from './FloatBtn.module.css';

const FloatBtn = ({ cart = [], onShowCart }) => {
  return (
    <button type='button' className={s.Btn} onClick={onShowCart}>
      <span className={s.Inner}>
        <img src={`${config.urls.media}shopping-cart-white.svg`} alt='cart' />
        {cart?.length > 0 && <span className={s.Cart_count}>{cart?.length}</span>}
      </span>
    </button>
  );
}

export default FloatBtn;
