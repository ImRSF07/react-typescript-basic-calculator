import { createContext, ReactElement, useReducer, useContext } from 'react';

import types from '../store/types/calculator';
import calculatorReducer, {
  initState,
  StateType,
} from '../store/reducers/calculator';

type ChildrenType = {
  children?: ReactElement | undefined;
};

const useCalculatorContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(calculatorReducer, initState);

  const actions = {
    inputValue: (value: string) => {
      if (state.result.includes('+')) {
        const numbers = state.result.split('+').map((val) => parseInt(val));
        const total = numbers.reduce((prev, cur) => {
          return prev + cur;
        });
        console.log(numbers);
      }
      dispatch({ type: types.INPUT_VALUE, payload: { result: value } });
    },
    clearValues: () => {
      dispatch({ type: types.CLEAR_VALUES });
    },
    addValues: () => {
      dispatch({ type: types.ADD_VALUES });
    },
  };

  return { state, ...actions };
};

type UseCalculatorContextType = ReturnType<typeof useCalculatorContext>;

const initContextState: UseCalculatorContextType = {
  state: initState,
  inputValue: () => {},
  clearValues: () => {},
  addValues: () => {},
};

const CalculatorContext = createContext(initContextState);

export const CalculatorProvider = ({
  children,
}: ChildrenType): ReactElement => {
  return (
    <CalculatorContext.Provider value={useCalculatorContext(initState)}>
      {children}
    </CalculatorContext.Provider>
  );
};

const useCalculator = () => useContext(CalculatorContext);

export default useCalculator;
