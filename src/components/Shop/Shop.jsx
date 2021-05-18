import Item from './Item/Item';

import s from './Shop.module.css';

const Shop = ({ onAddToCart, itemsId = [], onIncrementCartItem, onDecrementCartItem, filter }) => {
  const visibleItems = config.data.plants_categories.map(i => i.plants)?.flat().filter(i => i.name?.toLowerCase()?.includes(filter?.toLowerCase()));
  return (
    <div className={s.Shop}>
      <div className={s.Header}>
        <h2 className={s.Title}>{config.translations.bestsellers_label}</h2>
      </div>
      <div className={s.Body}>
        {
          filter
            ? <section className={s.Result}>
              <div className={s.Products}>
                {visibleItems?.map(i => <Item onIncrementCartItem={onIncrementCartItem} onDecrementCartItem={onDecrementCartItem} onAddToCart={onAddToCart} key={i.id} i={i} itemsId={itemsId} />)}
              </div>
            </section>
            : config.data.plants_categories?.map(i => (
              <section key={i.title}>
                <h3 className={s.Category}>{i?.title}</h3>
                <p className={s.About}>{i?.sub_title}</p>
                <div className={s.Products}>
                  {i?.plants?.map(i => <Item onIncrementCartItem={onIncrementCartItem} onDecrementCartItem={onDecrementCartItem} onAddToCart={onAddToCart} key={i.id} i={i} itemsId={itemsId} />)}
                </div>
              </section>
            ))
        }
      </div>
    </div>
  );
};

export default Shop;
