import { useState } from 'react';

import Popup from '../Popup/Popup';

import { postJsonService } from '../../../service/service';

import s from './Delivery.module.css';

const Delivery = ({ sum, cart }) => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
  });
  const [success, setSuccess] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChangeInput = ({target: { value, name }}) => {
    setData(prevState => ({...prevState, [name]: value}));
  };
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const body = {
      first_name: data.firstName,
      last_name: data.lastName,
      phone: data.phone,
      email: data.email || null,
      address: data.address,
      city: data.city,
      total_price: sum + config.data.shipping_price,
      order: cart.map(i => ({ id: `${i.id}`, qty: `${i.amount}`, price: `${Math.min(i.discount_price, i.price)}`}))
    };
    postJsonService(config.urls.order, JSON.stringify(body)).then(r => {
      setLoading(false);
      setShowPopup(true);
      if (r.ok) {
        window.open(config.urls.pay_link?.replace('{total_price}', sum + config.data.shipping_price), '_blank');
        return;
      }
      setSuccess(false);
    });
  };
  return (
    <>
      <form className={s.Wrap} onSubmit={handleSubmit}>
        <h3 className={s.Title}>{config.translations.delivery_options.title}</h3>
        <div className={s.Inputs_wrap}>
          <div className={s.Input_row}>
            <input
              type="text"
              name='firstName'
              className={s.Input}
              onChange={handleChangeInput}
              value={data.firstName}
              placeholder={config.translations.delivery_options?.first_name_placeholder}
              required
            />
            <input
              type="text"
              name='lastName'
              className={s.Input}
              onChange={handleChangeInput}
              value={data.lastName}
              placeholder={config.translations.delivery_options?.last_name_placeholder}
              required
            />
          </div>
          <div className={s.Input_row}>
            <input
              type="tel"
              name='phone'
              className={`${s.Input} ${s.Input_phone}`}
              placeholder={config.translations.delivery_options?.phone_placeholder}
              onChange={handleChangeInput}
              value={data.phone}
              required
            />
            <input
              type="email"
              name='email'
              className={s.Input}
              onChange={handleChangeInput}
              value={data.email}
              placeholder={config.translations.delivery_options?.email_placeholder}
            />
          </div>
          <div className={s.Input_row}>
            <input
              type="text"
              name='address'
              className={s.Input}
              onChange={handleChangeInput}
              value={data.address}
              placeholder={config.translations.delivery_options?.address_placeholder}
              required
            />
            <input
              type="text"
              name='city'
              className={s.Input}
              value={data.city}
              onChange={handleChangeInput}
              placeholder={config.translations.delivery_options?.city_placeholder}
              required
            />
          </div>
        </div>
        <p className={s.Text}>{config.translations.delivery_options.shipping_price?.replace('{price}', config.data.shipping_price)}</p>
        <p className={s.Text}>{config.translations.delivery_options.min_total_price?.replace('{price}', sum + config.data.shipping_price)}</p>
        <button type='submit' className={s.Pay}>
          {loading ? <img className={s.Loader} src={`${config.urls.media}loader.svg`} alt=''/>  : <img className={s.Pay_img} src={`${config.urls.media}paypal.png`} alt=''/>}
        </button>
      </form>
      {showPopup && (<Popup success={success}/>)}
    </>
  );
};

export default Delivery;
