import s from './Delivery.module.css';

const Delivery = () => {
  return (
    <div className={s.Wrap}>
      <h3 className={s.Title}>{config.translations.delivery_options.title}</h3>
      <div className={s.Inputs_wrap}>
        <div><input type="text"/><input type="text"/></div>
        <div><input type="text"/><input type="text"/></div>
        <div><input type="text"/><input type="text"/></div>
      </div>
      <p>{config.translations.delivery_options.shipping_price}</p>
      <p>{config.translations.delivery_options.min_total_price}</p>
    </div>
  );
};

export default Delivery;
