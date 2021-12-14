import './App.css';
import React, {useState} from 'react';

const App =() => {

  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value))
  }

  const clickClear = () => {
    setResult("");
  }

  const displayresult = () => {
    setResult(eval(result).toString())
  }

  return (
      <div className='calci'>
        <input type="text" placeholder='0' id='inputval' value={result}/>
        <button onClick={clickHandler} value="9">9</button>
        <button onClick={clickHandler} value="8">8</button>
        <button onClick={clickHandler} value="7">7</button>
        <button onClick={clickHandler} value="6">6</button>
        <button onClick={clickHandler} value="5">5</button>
        <button onClick={clickHandler} value="4">4</button>
        <button onClick={clickHandler} value="3">3</button>
        <button onClick={clickHandler} value="2">2</button>
        <button onClick={clickHandler} value="1">1</button>
        <button onClick={clickHandler} value="0">0</button>
        <button onClick={clickHandler} value=".">.</button>
        <button onClick={clickHandler} value="/">/</button>
        <button onClick={clickHandler} value="*">*</button>
        <button onClick={clickHandler} value="+">+</button>
        <button onClick={clickHandler} value="-">-</button>
        <button onClick={clickHandler} value="%">%</button>
        <button onClick={clickClear}>Clear</button>
        <button id='equals' onClick={displayresult}>=</button>
      </div>
  )
}

export default App;
