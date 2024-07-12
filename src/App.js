import './App.css';
import Calculator from './calculator/calculator.js';
import facebook from './calculator/facebook.png';
import whatsapp from './calculator/whatsapp.png';

function App() {
  return (
    <div className="App">
      <Calculator />
      
      <div className='footer'>
      <div className="me">Desiged and Coded by <b><a className="link" href="https://www.freecodecamp.org/Arafat_Gz">Arafat Gamzawe</a></b></div>
        
        <div>
          <p>Contact me ^_^ :</p>
          <a href='https://www.facebook.com/arafat.trans/'><img alt='facebook' className='facebook' src={facebook} /></a>
          <a href='https://wa.me/967775566782'><img alt='whatsapp' className='whatsapp' src={whatsapp} /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
