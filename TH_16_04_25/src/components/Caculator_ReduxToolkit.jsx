import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNumber1, setNumber2, increment, decrement } from '../js/counterSlice';

function Caculator_ReduxToolkit() {
  const number1 = useSelector((state) => state.counter.number1);
  const number2 = useSelector((state) => state.counter.number2);
  const result = useSelector((state) => state.counter.result);
  const dispatch = useDispatch();

  const handleSetNumber1 = (event) => {
    dispatch(setNumber1(event.target.value));
  };

  const handleSetNumber2 = (event) => {
    dispatch(setNumber2(event.target.value));
  };

  return (
    <div>
      <h2>Tinh toan voi Redux Toolkit</h2>
      <div>
        <label>First: </label>
        <input type="number" value={number1} onChange={handleSetNumber1} />
      </div>
      <div>
        <label>Second number</label>
        <input type="number" value={number2} onChange={handleSetNumber2} />
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>Cộng</button>
        <button onClick={() => dispatch(decrement())}>Trừ</button>
      </div>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
}

export default Caculator_ReduxToolkit;