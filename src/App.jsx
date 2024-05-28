import React, { useState, Fragment } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <Fragment>
      <div className="container">
        <div>{count}</div>
        <div className="button-container">
          <button className="button" onClick={minusCount}>
            -
          </button>
          <button className="button" onClick={resetCount}>
            reset
          </button>
          <button className="button" onClick={addCount}>
            +
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
