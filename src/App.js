import style from './App.module.css';
import logo from './images/logo.svg';
import hero from '/home/oztuzel/Documents/FrontendMentor/make-remote-work/src/images/image-hero-desktop.png';

import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
    <div className={style.app}>
      <header className={style.logo}>
        <img src={logo} alt='logo' />
      </header>
      <Navbar />
      <Card />
      <img src={hero} alt='hero' className={style.hero} />
    
    </div>
  );
}

export default App;
