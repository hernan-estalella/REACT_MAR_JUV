import React, { useReducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './style.css';

//? primer mal reducer
// const reducer = (state, value) => {
//   return state + value;
// };

const reducer = (state, action) => {
  switch (action) {
    case 'sumar':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'restar':
      return {
        ...state,
        count: state.count - 1 < 1 ? 0 : state.count - 1,
        error: state.count < 1 ? 'Error: el contador debe ser mayor a 0' : null,
      };
    case 'borrarError':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

const Counter = () => {
  const [{ count, error }, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });

  const handlerSubtract = () => {
    dispatch('restar');
  };

  const hadlerAdd = () => {
    dispatch('sumar');
  };

  const elemento = (
    <div>
      <div className="counter">
        <div>
          <button type="button" className="btn" onClick={handlerSubtract}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
        <div>{count}</div>
        <div>
          <button type="button" className="btn" onClick={hadlerAdd}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      {error && (
        <div style={{ margin: '20px' }}>
          <center>
            <button className="btn" onClick={() => dispatch('borrarError')}>
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
