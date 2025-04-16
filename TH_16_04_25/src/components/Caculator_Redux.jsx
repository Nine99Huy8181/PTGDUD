
import React from 'react';
import { connect } from 'react-redux';
import { setNumber1, setNumber2, increment, decrement } from '../js/actions';

function CounterWithRedux(props) {
  const handleSetNumber1 = (event) => {
    props.setNumber1(event.target.value);
  };

  const handleSetNumber2 = (event) => {
    props.setNumber2(event.target.value);
  };

  return (
    <div>
      <h2>Tinh toan with Redux</h2>
      <div>
        <label>First number: </label>
        <input type="number" value={props.number1} onChange={handleSetNumber1} />
      </div>
      <div>
        <label>Second number: </label>
        <input type="number" value={props.number2} onChange={handleSetNumber2} />
      </div>
      <div>
        <button onClick={props.increment}>Cộng</button>
        <button onClick={props.decrement}>Trừ</button>
      </div>
      <div>
        <p>Result: {props.result}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  number1: state.number1,
  number2: state.number2,
  result: state.result,
});

const mapDispatchToProps = (dispatch) => ({
  setNumber1: (value) => dispatch(setNumber1(value)),
  setNumber2: (value) => dispatch(setNumber2(value)),
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterWithRedux);