import { useState } from 'react';
import './cal-style.css';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState('');
  const [run, setRun] = useState(true);

  const maxLength = 15;
  const operations = '/*-+.';

  const checkInput = (e) => {
    const prevInput = equation[equation.length - 1];
    const currentInput = e.currentTarget.getAttribute('value');

    if (operations.includes(currentInput)) {

      if (currentInput === prevInput) {
        setEquation((prev) => prev.slice(0, -1));

      } else if ((currentInput === '*' && prevInput === '/') || (currentInput === '/' && prevInput === '*')) {
        setEquation((prev) => prev.slice(0, -2) + prev.slice(-1));

      } else if ((currentInput === '/' || currentInput === '*')) {
          if(equation.length === 0){
            setEquation('');
          }else if(prevInput === '-' || prevInput === '+'){
            setEquation(prev => prev.slice(0, -3) + prev.slice(-1))
          }

      } else if (currentInput === '.') {
        // Get the last number part of the equation
          const lastNumber = equation.split(/[/*\-+]/).pop();
          if (lastNumber.includes('.')) {
            setEquation((prev) => prev.slice(0, -1));
          }

      } else if (currentInput === '+'){
          if(prevInput === '*' || prevInput === '/' || prevInput === '-'){
               
               if (equation.charAt(equation.length - 2) === '*' || equation.charAt(equation.length - 2) === '/') {
                    setEquation(prev => prev.slice(0, -2) + prev.slice(-1))
                    
                }
                setEquation(prev => prev.slice(0, -2) + prev.slice(-1))
          }
        } 
    }
    if(equation === '0' && currentInput === '0'){
          setEquation(prev => prev.slice(0, -1))
    }
  };
  const checkOutput = (evalResult) => {
    if(evalResult.length > maxLength){
      evalResult = evalResult.slice(0, maxLength)
    }
    return evalResult;
  }

  const handleClick = (e) => {
    const buttonValue = e.currentTarget.getAttribute('value');
    if (run) {
      if (equation.length < maxLength) {
        if (buttonValue === '.') {
          // Prevent multiple decimal points in a single number
          const lastNumber = equation.split(/[/*\-+]/).pop();
          if (lastNumber.includes('.')) {
            return; // Do nothing if the last number already has a decimal point
          }
        }
        setEquation((prevEquation) => prevEquation + buttonValue);
        checkInput(e);
      } else {
        setResult('exceeded length');
        setRun(false);
      }
    }
  };

  const handleC = () => {
    setEquation('');
    setResult('0');
    setRun(true);
  };

  const handleEqual = () => {
    try {
      let evalResult = evaluate(equation).toString();
      evalResult = checkOutput(evalResult)
      setResult(evalResult);
      setEquation(evalResult);
    } catch {
      setResult('error');
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="value" id="display">
          <h1>{equation || result}</h1>
        </div>
        <span className="num clear" onClick={handleC} id="clear"><i>C</i></span>
        <span className="num" id="divide" value="/" onClick={handleClick}><i>/</i></span>
        <span className="num" id="multiply" value="*" onClick={handleClick}><i>*</i></span>
        <span className="num" id="seven" value="7" onClick={handleClick}><i>7</i></span>
        <span className="num" id="eight" value="8" onClick={handleClick}><i>8</i></span>
        <span className="num" id="nine" value="9" onClick={handleClick}><i>9</i></span>
        <span className="num" id="subtract" value="-" onClick={handleClick}><i>-</i></span>
        <span className="num" id="four" value="4" onClick={handleClick}><i>4</i></span>
        <span className="num" id="five" value="5" onClick={handleClick}><i>5</i></span>
        <span className="num" id="six" value="6" onClick={handleClick}><i>6</i></span>
        <span className="num plus" id="add" value="+" onClick={handleClick}><i>+</i></span>
        <span className="num" id="one" value="1" onClick={handleClick}><i>1</i></span>
        <span className="num" id="two" value="2" onClick={handleClick}><i>2</i></span>
        <span className="num" id="three" value="3" onClick={handleClick}><i>3</i></span>
        <span className="num" id="zero" value="0" onClick={handleClick}><i>0</i></span>
        <span className="num" id="00" value="00" onClick={handleClick}><i>00</i></span>
        <span className="num" id="decimal" value="." onClick={handleClick}><i>.</i></span>
        <span className="num equal" id="equals" value="=" onClick={handleEqual}><i>=</i></span>
      </div>
    </div>
  );
};

export default Calculator;
