import s from './Item.module.css';

const Item = ({i}) => {
  return(
    <div key={i.id} className={s.Item}>
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
        <div>
          <button type='button' className={s.Btn}><img src={config.urls.media + 'plus.svg'} alt='' /></button>
          <span>1</span>
          <button type='button' className={s.Btn}><img src={config.urls.media + 'minus.svg'} alt='' /></button>
        </div>
        <div className={s.Price}>
          {i.price !== i.discount_price && <span>{i.price + config.currency}</span>}
          <span>{i.discount_price <= i.price ? i.discount_price + config.currency : i.price + config.currency}</span>
        </div>
      </div>
      {i.qty_stock !== 0 && <button type='button' className={s.Add_btn}>{config.translations.add_to_card_label}</button>}
    </div>
  );
};

export default Item;

