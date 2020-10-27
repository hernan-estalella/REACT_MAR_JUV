import React, { useState, useEffect, useRef, useCallback } from 'react';
import { render } from 'react-dom';
import FactorialOf from './FactorialOf';
/*
()=>{} === ()=>{} //false
[] === [] //false
{} === {} //false 
*/
import './style.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [factorialNum, setFactorialNum] = useState(1);
  const [factorialNum2, setFactorialNum2] = useState(1);

  const memoincrementNum = useCallback(() => {
    setFactorialNum((n) => n + 1);
  }, []);

  const memoincrementNum2 = useCallback(() => {
    setFactorialNum2((n) => n + 1);
  }, []);

  let id = useRef();
  const miInput = useRef();

  const stopCounter = () => {
    return clearInterval(id.current);
  };

  useEffect(() => {
    id.current = setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);

    return () => {
      stopCounter();
    };
  }, []);

  return (
    <div>
      <div>
        <h3>{counter}</h3>
        <button onClick={stopCounter}>Stop</button>
      </div>
      <br />
      <div>
        <input ref={miInput} />
        <button onClick={() => miInput.current.focus()}>Focus</button>
      </div>
      <br />
      <hr />
      <FactorialOf num={factorialNum} increment={memoincrementNum} />
      <br />
      <FactorialOf num={factorialNum2} increment={memoincrementNum2} />
    </div>
  );
};

render(React.createElement(App), document.getElementById('root'));
