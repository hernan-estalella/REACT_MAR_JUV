import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Counter = () => {
  return (
    <div>
      <div className="counter">
        <div>
          <button type="button" className="btn">
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
        <div>0</div>
        <div>
          <button type="button" className="btn">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
