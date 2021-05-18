import { useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import s from './Item.module.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);

const Item = ({ i, onAddToCart, itemsId, onDecrementCartItem, onIncrementCartItem  }) => {
  const [amount, setAmount] = useState(1);
  const [gallery, setGallery] = useState(false);
  const handleIncrement = () => {
    setAmount(prevState => {
      if (prevState >= i.qty_stock) {
        return prevState;
      }
      return prevState + 1;
    });
    itemsId.includes(i.id) && onIncrementCartItem(i.id);
  };
  const handleDecrement = () => {
    setAmount(prevState => {
      if (prevState <= 1) {
        return prevState;
      }
      return prevState - 1;
    });
    itemsId.includes(i.id) && onDecrementCartItem(i.id);
  };
  const handleShowGallery = () => setGallery(true);
  const handleHideGallery = () => setGallery(false);
  return(
    <div className={s.Item}>
      <figure>
        <picture onClick={handleShowGallery}>
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
          <button type='button' className={s.Btn} onClick={handleIncrement} aria-label={config.translations.plus_label}><img src={config.urls.media + 'plus.svg'} alt='plus' /></button>
          <span className={s.Qty}>{amount}</span>
          <button type='button' className={s.Btn} onClick={handleDecrement} aria-label={config.translations.minus_label}><img src={config.urls.media + 'minus.svg'} alt='minus' /></button>
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
      <button
        type='button'
        aria-label={config.translations.add_to_card_label}
        className={s.Add_btn + (itemsId.includes(i.id) ? ' ' + s.Inactive_btn : '') + (i.qty_stock == 0 ? ' ' + s.Hidden : '')}
        onClick={() => onAddToCart({...i, amount})}
      >
        {itemsId.includes(i.id) ? <img className={s.Check} src={`${config.urls.media}check.svg`} alt='check' /> : config.translations.add_to_card_label}
      </button>
      {gallery && <div className={s.Gallery} onClick={handleHideGallery}>
        <div className={s.Body} onClick={e => e.stopPropagation()}>
          <Swiper navigation >
            {i.photo?.map((item, index) => (
              <SwiperSlide key={item.name + '' + index} >
                <picture>
                  <source srcSet={config.urls.plants_pic + item + '.webp'} type='image/webp' loading='lazy'/>
                  <img src={config.urls.plants_pic + item + '.jpg'} alt={item} loading='lazy'/>
                </picture>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>}
    </div>
  );
};

export default Item;

