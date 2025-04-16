import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NUMBER_1':
      return { ...state, number1: action.payload };
    case 'SET_NUMBER_2':
      return { ...state, number2: action.payload };
    case 'INCREMENT':
      return { ...state, result: parseInt(state.number1) + parseInt(state.number2) };
    case 'DECREMENT':
      return { ...state, result: parseInt(state.number1) - parseInt(state.number2) };
    default:
      return state;
  }
};

const initialState = {
  number1: 0,
  number2: 0,
  result: 0,
};

function Caculator_useReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSetNumber1 = (event) => {
    dispatch({ type: 'SET_NUMBER_1', payload: event.target.value });
  };

  const handleSetNumber2 = (event) => {
    dispatch({ type: 'SET_NUMBER_2', payload: event.target.value });
  };

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h2>Cong tru with useReducer</h2>
      <div>
        <label>First number:</label>
        <input type="number" value={state.number1} onChange={handleSetNumber1} />
      </div>
      <div>
        <label>Second number</label>
        <input type="number" value={state.number2} onChange={handleSetNumber2} />
      </div>
      <div>
        <button onClick={handleIncrement}>Cộng</button>
        <button onClick={handleDecrement}>Trừ</button>
      </div>
      <div>
        <p>Result: {state.result}</p>
      </div>
    </div>
  );
}

export default Caculator_useReducer;