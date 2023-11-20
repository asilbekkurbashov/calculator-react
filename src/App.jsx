import { useState } from "react";
import "./App.css";
import { operationsBtns, Numbers,Operation,Number } from "./data";

function App() {
  const [display,setDisplay] = useState("");
  const [result,setResult] = useState("");

  function showDisplay(element){

    if(Operation.includes(display.slice(-1)) && Operation.includes(element)){
      let str = display.replace(display.slice(-1), element)
      setDisplay(str)
    }

    if(display === '' && Operation.includes(element) || Operation.includes(display.slice(-1)) && Operation.includes(element)){
      return;
    }

    // delete 
    if(display !=='' && element === 'Delete'){  
      let arr = display.split('');
      arr.pop();
      let newValue = arr.join('')
      setDisplay(newValue)
    }

    // Result
    if(display !=='' && element ==='='){
      setResult(display)
      setDisplay(String(eval(display)))
    }

    if(display.at(0) == '0' && element === '0' || display.at(-1)==='0' && Number.includes(element)){
      return;
    }

    if(element === 'Delete' || element === '='){
      return;
    }

    setDisplay((prev) => prev + element)
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <div className='result'>{result ? result + '=' : ''}</div>
          <div className='currentDisplay'>{display}</div>
        </div>
        <div className="operations">
          {operationsBtns.map((elem, index) => {
            return <button onClick={()=> showDisplay(elem.op)} key={index} className="operation">{elem.op}</button>;
          })}
        </div>
        <div className="numbers">
          {Numbers.map((elem,index)=>{
            return <button onClick={()=> showDisplay(elem.number)} className="number" key={index}>{elem.number}</button>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
