import logo from './assets/Cafe-Guitar-Logo.jpg';
import './app.scss';

function App() {
  return (
    <div className='main'>
      <img className='main__logo' src={logo} alt="cafe-Guitar-logo" />
      <h1 className='main__text'>Coming Soon...</h1>
    </div>
  );
}

export default App;
