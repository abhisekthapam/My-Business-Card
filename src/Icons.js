import logo from './facebookw.png';
import './App.css';
import Gmail from './Gmail';
import Linkedin from './Linkedin';
import Twitter from './Twitter';
import Github from './Github';

export default function Icons() {
  return (
    <div className='cointainer1'>
      <a href='https://www.facebook.com/abhisek.magar.0203/' target="_blank" rel="noreferrer"><img src={logo} alt="facebookIcon" className="icon" /></a>
      <Gmail />
      <Linkedin />
      <Twitter />
      <Github />
    </div>

  );
}

