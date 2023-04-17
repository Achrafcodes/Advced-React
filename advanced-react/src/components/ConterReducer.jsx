import React, { useReducer } from 'react';

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      throw new Error('Unknown action type');
  }
}
function Counter() {
  d;
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  function handleIncrementClick() {
    dispatch({ type: 'INCREMENT' });
  }

  function handleDecrementClick() {
    dispatch({ type: 'DECREMENT' });
  }

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleIncrementClick}>zyada</button>
      <button onClick={handleDecrementClick}>rassl7ma9</button>
    </div>
  );
}
export default Counter;
