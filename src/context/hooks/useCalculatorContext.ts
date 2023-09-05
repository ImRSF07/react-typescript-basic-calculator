import { useReducer } from 'react';

import calculatorReducer, { StateType } from '../../store/reducers/calculator';
import types from '../../store/types/calculator';

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
        result = numbers
          .reduce((prev, cur) => {
            const result = prev + cur;
            if (Number.isNaN(result)) {
              return prev;
            }
            return result;
          })
          .toString();
      }
    }
    return result;
  };

  const actions = {
    inputValue: (value: string) => {
      const expression = state.result + value;
      const previewResult = evaluateExpression('+', expression);

      dispatch({
        type: types.INPUT_VALUE,
        payload: {
          result: value,
          previewResult: Number.isNaN(previewResult) ? '' : previewResult,
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
