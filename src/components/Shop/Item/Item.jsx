import s from './Item.module.css';

const Item = ({i}) => {
  return(
    <div className={s.Item}>
      <figure>
        <picture>
          <source className={s.Plant_pic} srcSet={config.urls.plants_pic + i.photo[0] + '.webp'} type='image/webp' loading='lazy' />
          <img className={s.Plant_pic} src={config.urls.plants_pic + i.photo[0] + '.jpg'} alt='makeup' loading='lazy' />
        </picture>
        <figcaption>{i.name}</figcaption>
      </figure>
      <p className={s.Desc}>{i.description}</p>
      <div className={s.Actions}>
        <span className={s.Stock_label + (i.qty_stock == 0 ? ' ' + s.Inactive : '')}>
          {i.qty_stock == 0 ? config.translations.out_of_stock_label : config.translations.in_stock_label}
        </span>
        <div className={s.Controls}>
          <button type='button' className={s.Btn}><img src={config.urls.media + 'plus.svg'} alt='' /></button>
          <span className={s.Qty}>1</span>
          <button type='button' className={s.Btn}><img src={config.urls.media + 'minus.svg'} alt='' /></button>
        </div>
        <div className={s.Price_wrap}>
          {i.price !== i.discount_price && <span className={s.Price}>{i.price + config.currency}</span>}
          <span className={s.Discount}>{
            i.discount_price <= i.price
              ? i.discount_price == 0 ? config.translations.free_label : i.discount_price + config.currency
              : i.price + config.currency}
          </span>
        </div>
      </div>
      <button type='button' className={s.Add_btn + (i.qty_stock == 0 ? ' ' + s.Hidden : '')} onClick={() => console.log('asdasd')}>{config.translations.add_to_card_label}</button>
    </div>
  );
};

export default Item;

