import logo from './abhisek.png';
import './App.css';
import Buttons from './Buttons';
import About from './About';
import Interests from './Interests';
import Icons from './Icons';

function App() {
  return (<div className="container">
    <img src={logo} alt="Abhisek" className="abhisek"/>
    <h1 className="info">Abhisek Magar</h1>
    <p className="info1">Frontend Developer</p>
    <p className="info2">My Website</p>
    <Buttons />
    <About />
    <Interests />
    <Icons />
    </div>
  );
}

export default App;
