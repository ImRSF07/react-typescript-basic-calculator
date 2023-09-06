import { useReducer } from 'react';

import calculatorReducer, { StateType } from '../../store/reducers/calculator';
import types from '../../store/types/calculator';

import { add, subtract, multiply, divide } from '../../utils/utils';

type Operators = '+' | '-' | '*' | '/';

const useCalculatorContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(calculatorReducer, initState);

  const evaluateExpression = (
    operator: Operators,
    expression: string
  ): string => {
    let result: string = '';
    if (operator === '+') {
      if (expression.includes('+')) {
        const numbers = expression.split('+').map((val) => parseInt(val));
        result = add(numbers);
      }
    }
    if (operator === '-') {
      if (expression.includes('-')) {
        const numbers = expression.split('-').map((val) => parseInt(val));
        result = subtract(numbers);
      }
    }
    if (operator === '*') {
      if (expression.includes('*')) {
        const numbers = expression.split('*').map((val) => parseInt(val));
        result = multiply(numbers);
      }
    }
    if (operator === '/') {
      if (expression.includes('/')) {
        const numbers = expression.split('/').map((val) => parseInt(val));
        result = divide(numbers);
      }
    }
    return result;
  };

  const actions = {
    inputValue: (value: string) => {
      let expression = state.result + value;
      let previewResult: string = '';
      if (expression.includes('+')) {
        previewResult = evaluateExpression('+', expression);
      }

      if (expression.includes('-')) {
        previewResult = evaluateExpression('-', expression);
      }

      // 1+1-2 = 0

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
