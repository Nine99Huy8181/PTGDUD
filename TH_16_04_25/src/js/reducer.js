const initialState = {
  number1: 0,
  number2: 0,
  result: 0,
};

const counterReducer = (state = initialState, action) => {
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

export default counterReducer;