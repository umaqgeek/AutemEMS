import {
  UI_START_LOADING,
  UI_STOP_LOADING
} from '../actions/actionTypes';

const initialState = {
  isLoading: false
};

const uiReducer = (state=initialState, action) => {
  switch (action.type) {
    case UI_START_LOADING:
      console.log('true UI');
      return {
        isLoading: true
      };
    case UI_STOP_LOADING:
      console.log('false UI');
      return {
        isLoading: false
      };
    default:
      console.log('default UI');
      return state;
  }
};

export default uiReducer;
