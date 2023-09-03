import { createContext, ReactElement } from 'react';

import { initState } from '../store/reducers/calculator';

type ChildrenType = {
  children?: ReactElement | undefined;
};

const CalculatorContext = createContext(initState);

export const CalculatorProvider = ({
  children,
}: ChildrenType): ReactElement => {
  return (
    <CalculatorContext.Provider value={initState}>
      {children}
    </CalculatorContext.Provider>
  );
};
