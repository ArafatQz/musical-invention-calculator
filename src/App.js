import './App.css';
import Calculator from './calculator/calculator.js';
import facebook from './calculator/facebook.png';
import whatsapp from './calculator/whatsapp.png';

function App() {
  return (
    <div className="App">
      <Calculator />
      
      <div className='footer'>
      <h4>Desiged and Coded by <b><a href="https://www.freecodecamp.org/Arafat_Gz">Arafat Gamzawe</a></b></h4>
        <div><i><b></b></i></div>
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
