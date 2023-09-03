import types from '../types/calculator';

export type StateType = {
  result: string | undefined;
  previewResult: string | undefined;
};

type ReducerAction = {
  type: string;
  payload?: string;
};

export const initState: StateType = { result: '', previewResult: '' };

export const calculatorReducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case types.ADD_INPUT:
      return { ...state, result: action.payload };
    default:
      throw new Error('Reducer error.');
  }
};
