import s from './Delivery.module.css';

const Delivery = ({ sum }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <form className={s.Wrap} onSubmit={handleSubmit}>
      <h3 className={s.Title}>{config.translations.delivery_options.title}</h3>
      <div className={s.Inputs_wrap}>
        <div className={s.Input_row}>
          <input
            type="text"
            className={s.Input}
            placeholder={config.translations.delivery_options?.first_name_placeholder}
            required
          />
          <input
            type="text"
            className={s.Input}
            placeholder={config.translations.delivery_options?.last_name_placeholder}
            required
          />
        </div>
        <div className={s.Input_row}>
          <input
            type="text"
            className={s.Input}
            placeholder={config.translations.delivery_options?.phone_placeholder}
            required
          />
          <input
            type="text"
            className={s.Input}
            placeholder={config.translations.delivery_options?.email_placeholder}
          />
        </div>
        <div className={s.Input_row}>
          <input
            type="text"
            className={s.Input}
            placeholder={config.translations.delivery_options?.address_placeholder}
            required
          />
          <input
            type="text"
            className={s.Input}
            placeholder={config.translations.delivery_options?.city_placeholder}
            required
          />
        </div>
      </div>
      <p className={s.Text}>{config.translations.delivery_options.shipping_price?.replace('{price}', config.data.shipping_price)}</p>
      <p className={s.Text}>{config.translations.delivery_options.min_total_price?.replace('{price}', sum + config.data.shipping_price)}</p>
      <button type='submit' className={s.Pay}>
        <img src={`${config.urls.media}paypal.png`} alt='' />
      </button>
    </form>
  );
};

export default Delivery;
