import types from '../types/calculator';

export type StateType = {
  result: string;
  previewResult: string;
  error: string;
};

type ActionPayload = {
  result?: string;
  error?: string;
  previewResult?: string;
  // [key: string]: unknown;
};

type ReducerAction = {
  type: string;
  payload?: ActionPayload;
};

export const initState: StateType = {
  result: '',
  previewResult: '',
  error: '',
};

const calculatorReducer = (
  state: StateType,
  action: ReducerAction
): StateType => {
  switch (action.type) {
    case types.INPUT_VALUE:
      return {
        ...state,
        result: state.result + action.payload?.result,
        previewResult: String(action.payload?.previewResult),
      };
    case types.CLEAR_VALUES:
      return { ...state, result: '', previewResult: '' };
    case types.CALCULATE_RESULT: {
      let updatedResult = '';
      if (state.previewResult) {
        updatedResult = state.previewResult;
      } else {
        updatedResult = state.result;
      }
      return {
        ...state,
        result: updatedResult,
        previewResult: '',
      };
    }

    case types.CLEAR_ERRORS:
      return { ...state, error: '' };

    default:
      throw new Error('Reducer error.');
  }
};

export default calculatorReducer;
