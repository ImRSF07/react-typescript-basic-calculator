import types from '../types/calculator';

export type StateType = {
  result: string;
  previewResult: string;
};

type ActionPayload = { result: string } ;

type ReducerAction = {
  type: string;
  payload?: ActionPayload;
  //                       ^?
};

export const initState: StateType = { result: '', previewResult: '' };

const calculatorReducer = (
  state: StateType,
  action: ReducerAction
): StateType => {
  switch (action.type) {
    case types.INPUT_VALUE:
      return { ...state, result: state.result + action.payload?.result };
    case types.CLEAR_VALUES:
      return { ...state, result: '' };
    case types.ADD_VALUES:
      return {
        ...state,
        result: String(Number(state.result) + Number(action.payload)),
      };

    default:
      throw new Error('Reducer error.');
  }
};

export default calculatorReducer;
