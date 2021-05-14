import s from './CartItem.module.css';

const CartItem = ({ i, onRemoveFromCart }) => {
  return (
    <li className={s.Item}>
      <button type='button' className={s.Btn} onClick={() => onRemoveFromCart(i.id)}><img src={config.urls.media + 'close.svg'} alt='' /></button>
      <div className={s.Price_wrap}>
        <span className={s.Discount}>{
          i.discount_price <= i.price
            ? i.discount_price == 0 ? config.translations.free_label : i.discount_price + config.currency
            : i.price + config.currency}
        </span>
      </div>
      <div className={s.Controls}>
        <button type='button' className={s.Btn}><img src={config.urls.media + 'plus.svg'} alt='' /></button>
        <span className={s.Qty}>1</span>
        <button type='button' className={s.Btn}><img src={config.urls.media + 'minus.svg'} alt='' /></button>
      </div>
      <figure className={s.Pic}>
        <figcaption>{i.name}</figcaption>
        <picture>
          <source className={s.Plant_pic} srcSet={config.urls.plants_pic + i.photo[0] + '.webp'} type='image/webp' loading='lazy' />
          <img className={s.Plant_pic} src={config.urls.plants_pic + i.photo[0] + '.jpg'} alt='makeup' loading='lazy' />
        </picture>
      </figure>

    </li>
  );
};

export default CartItem;
