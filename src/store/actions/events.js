import {
  SELECTED_EVENT,
  ADD_EVENT,
  // REMOVE_EVENT,
  // UPDATE_EVENT,
  // REMOVE_ALL_EVENT,
  VIEW_EVENT
} from './actionTypes';

import {
  BASE_URL,
  uiStartLoading,
  uiStopLoading
} from './index';

export const selectedEvent = (eventData) => {
  return {
    type: SELECTED_EVENT,
    eventData: eventData
  }
};

export const addEvent = (eventData) => {
  // return {
  //   type: ADD_EVENT,
  //   eventData: eventData
  // };
  return dispatch => {
    dispatch(uiStartLoading());
    fetch(BASE_URL + '/events.json', {
      method: 'POST',
      body: JSON.stringify(eventData)
    })
    .then(res => res.json())
    .then(parsedRes => {
      console.log(parsedRes);
      dispatch(uiStopLoading());
    })
    .catch(err => {
      console.log('addEvent: ' + err);
      dispatch(uiStopLoading());
    });
  };
};

export const getEvent = () => {
  return dispatch => {
    dispatch(uiStartLoading());
    fetch(BASE_URL + '/events.json')
    .then(res => res.json())
    .then(parsedRes => {
      let eventsList = [];
      for (let key in parsedRes) {
        eventsList.push(parsedRes[key]);
      }
      dispatch(uiStopLoading());
      dispatch(viewEvent(eventsList));
    })
    .catch(err => {
      console.log('viewEvent: ' + err);
      dispatch(uiStopLoading());
    });
  };
};

export const viewEvent = (eventData) => {
  return {
    type: VIEW_EVENT,
    eventData: eventData
  };
};
