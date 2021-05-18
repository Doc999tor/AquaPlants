import s from './Popup.module.css';

const Popup = ({ success = false }) => {
  return (
    <div className={s.Wrap}>
      <div className={s.Body}>
        {success
          ? <img className={s.Img} src={`${config.urls.media}ic_send_success.svg`} alt='send_success' />
          : <div className={`${s.Outer} ${s.Circle}`}>
            <div className={`${s.Inner} ${s.Circle}`}>
              <div className={`${s.Center} ${s.Circle}`}>
                <img src={`${config.urls.media}ic_error.svg`} alt='error' />
              </div>
            </div>
          </div>}
        <p className={s.Text}>{success ? config.translations.send_popup?.success : config.translations.send_popup?.error}</p>
      </div>
    </div>
  );
};

export default Popup;
