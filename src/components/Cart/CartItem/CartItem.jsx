import s from './CartItem.module.css';

const CartItem = ({ i, onRemoveFromCart, onIncrementCartItem, onDecrementCartItem }) => {
  return (
    <li className={s.Item}>
      <div className={s.Cont}>
        <button type='button' className={s.Btn} onClick={() => onRemoveFromCart(i.id)} aria-label={config.translations.remove_from_cart_label}><img src={config.urls.media + 'close.svg'} alt='close' /></button>
        <div className={s.Price_wrap}>
          <span className={s.Discount}>{
            i.discount_price <= i.price
              ? i.discount_price == 0 ? config.translations.free_label : i.discount_price + config.currency
              : i.price + config.currency}
          </span>
        </div>
        <div className={s.Controls}>
          <button type='button' className={s.Btn} onClick={() => onIncrementCartItem(i.id)} aria-label={config.translations.plus_label}>
            <img src={config.urls.media + 'plus.svg'} alt='plus' />
          </button>
          <span className={s.Qty}>{i.amount}</span>
          <button type='button' className={s.Btn} onClick={() => onDecrementCartItem(i.id)} aria-label={config.translations.minus_label}>
            <img src={config.urls.media + 'minus.svg'} alt='minus' />
          </button>
        </div>
      </div>

      <figure className={s.Pic}>
        <figcaption>{i.name}</figcaption>
        <picture>
          <source className={s.Plant_pic} srcSet={config.urls.plants_pic + i.photo[0] + '.webp'} type='image/webp' loading='lazy' />
          <img className={s.Plant_pic} src={config.urls.plants_pic + i.photo[0] + '.jpg'} alt={i.photo[0]} loading='lazy' />
        </picture>
      </figure>

    </li>
  );
};

export default CartItem;
