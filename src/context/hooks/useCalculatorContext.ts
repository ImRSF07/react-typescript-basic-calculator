import { useReducer } from 'react';

import { evaluate } from 'mathjs';

import calculatorReducer, { StateType } from '../../store/reducers/calculator';
import types from '../../store/types/calculator';

const useCalculatorContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(calculatorReducer, initState);

  const actions = {
    inputValue: (value: string) => {
      let expression: string = state.result + value;

      let previewResult: string = '';

      if (!['+', '-', '*', '/', '='].includes(value)) {
        previewResult = evaluate(expression);
      }

      dispatch({
        type: types.INPUT_VALUE,
        payload: {
          result: value,
          previewResult:
            Number.isNaN(previewResult) || previewResult === '0'
              ? ''
              : previewResult,
        },
      });
    },
    calculateResult: () => {
      dispatch({
        type: types.CALCULATE_RESULT,
      });
    },
    clearValues: () => {
      dispatch({
        type: types.CLEAR_VALUES,
      });
    },
    clearErrors: () => {
      dispatch({ type: types.CLEAR_ERRORS });
    },
  };

  return { state, ...actions };
};

export default useCalculatorContext;
