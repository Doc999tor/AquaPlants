import s from './Shop.module.css';

const Shop = () => {
  return (
    <div className={s.Shop}>
      <div className={s.Header}>
        <h2 className={s.Title}>{config.translations.bestsellers_label}</h2>
      </div>
      <div className={s.Body}>
        {config.data.plants_categories?.map(i => (
          <section key={i.title}>
            <h3 className={s.Category}>{i?.title}</h3>
            <p className={s.About}>{i?.sub_title}</p>
            <div className={s.Products}>
              {i?.plants?.map(i => {
                return (
                  <div key={i.id} className={s.Item}>
                    <figure>
                      <picture>
                        <source className={s.Plant_pic} srcSet={config.urls.plants_pic + i.photo[0] + '.webp'} type='image/webp' loading='lazy' />
                        <img className={s.Plant_pic} src={config.urls.plants_pic + i.photo[0] + '.jpg'} alt='makeup' loading='lazy' />
                      </picture>
                      <figcaption>{i.name}</figcaption>
                    </figure>
                    <p className={s.Desc}>{i.description}</p>
                  </div>
                );}
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Shop;
