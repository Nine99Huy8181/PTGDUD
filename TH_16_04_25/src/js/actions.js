export const setNumber1 = (value) => ({
  type: 'SET_NUMBER_1',
  payload: value,
});

export const setNumber2 = (value) => ({
  type: 'SET_NUMBER_2',
  payload: value,
});

export const increment = () => ({
  type: 'INCREMENT',
});

export const decrement = () => ({
  type: 'DECREMENT',
});