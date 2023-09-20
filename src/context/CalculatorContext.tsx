import { createContext, ReactElement, useContext } from 'react';

import { initState } from '../store/reducers/calculator';

import useCalculatorContext from './hooks/useCalculatorContext';

type ChildrenType = {
  children?: ReactElement | undefined;
};

type UseCalculatorContextType = ReturnType<typeof useCalculatorContext>;

const initContextState: UseCalculatorContextType = {
  state: initState,
  inputValue: () => {},
  clearValues: () => {},
  clearErrors: () => {},
  calculateResult: () => {}
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
