import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Counter = () => {
  const [counter, setCounter] = useState(1);
  const [error, setError] = useState(null); // [estado, fn]

  const handlerSubtract = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    } else {
      setError('Tiene que ser Mayor que 0 🦄');
    }
  };

  const hadlerAdd = () => {
    setCounter(counter + 1);
    setError(null);
  };

  const elemento = (
    <div>
      <div className="counter">
        <div>
          <button type="button" className="btn" onClick={handlerSubtract}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
        <div>{counter}</div>
        <div>
          <button type="button" className="btn" onClick={hadlerAdd}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      {error && (
        <div style={{ margin: '20px' }}>
          <center>
            <button className="btn" onClick={() => setError(null)}>
              Quitar Error
            </button>
            <p style={{ color: 'red' }}>{error}</p>
          </center>
        </div>
      )}
    </div>
  );
  console.log(elemento);

  return elemento;
};

export default Counter;
