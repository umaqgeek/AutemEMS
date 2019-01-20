import {
  ADD_ALUMNI,
  UPDATE_ALUMNI,
  REMOVE_ALUMNI,
  REMOVE_ALL_ALUMNI,
  VIEW_ALUMNI,
  SET_CURR_ALUMNI,
  GET_CURR_ALUMNI
} from '../actions/actionTypes';

const initialState = {
  alumnis: [],
  currentAlumni: null
};

const alumnisReducer = (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_ALUMNI:
      return {
        ...state
      };
    case SET_CURR_ALUMNI:
      var findAlumni = state.alumnis.find(alumni => {
        return alumni.email === action.alumni.email
      });
      return {
        ...state,
        currentAlumni: (typeof findAlumni !== 'undefined') ? (findAlumni) : (action.alumni)
      };
    case ADD_ALUMNI:
      var findAlumni = state.alumnis.find(alumni => {
        return alumni.email.toLowerCase() === action.alumni.email.toLowerCase()
      });
      let alumnis = state.alumnis;
      if (typeof findAlumni === 'undefined') {
        alumnis = alumnis.concat(action.alumni);
      }
      return {
        ...state,
        alumnis: alumnis
      };
    default:
      return state;
  }
};

export default alumnisReducer;
