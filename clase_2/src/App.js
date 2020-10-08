import React from 'react';
import { render } from 'react-dom';

const App = () => {
  //JSX
  //return React.createElement('div', {className:"unaClase"}, React.createElement('div,{}, "kajshdkajsdh"));

  return (
    <div className="">
      <div>kajshdkajsdh</div>
    </div>
  );
};

render(React.createElement(App), document.getElementById('root'));
