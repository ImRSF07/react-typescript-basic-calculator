import { useReducer } from 'react';

import types from '../store/types/calculator';
import { calculatorReducer, StateType } from '../store/reducers/calculator';

export const useCalculator = (initState: StateType) => {
  const [state, dispatch] = useReducer(calculatorReducer, initState);

  const handleInput = () => {
    dispatch({
      type: types.ADD_INPUT,
      payload: '0123457677',
    });
  };

  return { state, handleInput };
};
