import {
  ADD_ALUMNI,
  REMOVE_ALUMNI,
  UPDATE_ALUMNI,
  REMOVE_ALL_ALUMNI,
  VIEW_ALUMNI,
  SET_CURR_ALUMNI,
  GET_CURR_ALUMNI
} from './actionTypes';

import {
  uiStartLoading,
  uiStopLoading
} from './index';

export const setCurrentAlumni = (alumni) => {
  return {
    type: SET_CURR_ALUMNI,
    alumni: alumni
  };
};

export const getCurrentAlumni = (alumni) => {
  return {
    type: GET_CURR_ALUMNI,
    alumni: alumni
  };
};

export const addAlumni = (alumni) => {
  // return {
  //   type: ADD_ALUMNI,
  //   alumni: alumni
  // };
  return dispatch => {
    dispatch(uiStartLoading());
    fetch("https://umar-react-nativ-1547611996954.firebaseio.com/alumnis.json", {
      method: "POST",
      body: JSON.stringify(alumni)
    })
    .catch(err => {
      console.log(err);
      dispatch(uiStopLoading());
    })
    .then(res => res.json())
    .then(parsedRes => {
      console.log(parsedRes);
      dispatch(uiStopLoading());
    });
  };
};

export const removeAlumni = (alumni) => {
  return {
    type: REMOVE_ALUMNI,
    alumniId: alumni.id
  };
};

export const updateAlumni = (alumni) => {
  return {
    type: UPDATE_ALUMNI,
    alumniId: alumni.id,
    alumni: alumni
  };
};

export const removeAllAlumni = () => {
  return {
    type: REMOVE_ALL_ALUMNI
  };
};

export const viewAlumni = () => {
  return {
    type: VIEW_ALUMNI
  };
};
