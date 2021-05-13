import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Footer from './components/Footer/Footer';
import s from './styles.module.css';

function App() {
  return (
    <div className={s.App}>
      <Header />
      <main>
        <div className={s.Aqua} style={{backgroundImage: `url('${config.urls.media}aquarium.png')`}}>
          <div className={s.Texts}>
            <h2 className={s.Title}>{config.translations.site_title}</h2>
            <p className={s.Subtitle}>{config.translations.site_subtitle}</p>
          </div>
        </div>
        <Shop />
      </main>
      <Footer />
    </div>
  );
}

export default App;
