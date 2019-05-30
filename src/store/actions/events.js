import {
  SELECTED_EVENT,
  ADD_EVENT,
  REMOVE_EVENT,
  // UPDATE_EVENT,
  // REMOVE_ALL_EVENT,
  VIEW_EVENT
} from './actionTypes';

import {
  BASE_URL,
  uiStartLoading,
  uiStopLoading
} from './index';

import { fetcher } from '../models';

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

    fetcher('events.json', 'POST', eventData).then(parsedRes => {
      console.log(parsedRes);
      dispatch(uiStopLoading());
    })
    .catch(err => {
      console.log('addEvent: ' + err);
      dispatch(uiStopLoading());
    });

  };
};

export const deleteEvent = (uuid) => {
  return dispatch => {

    dispatch(uiStartLoading());

    fetcher('events.json').then(parsedRes => {

      console.log('REMOVE 1');
      console.log(parsedRes);
      console.log('REMOVE 2');
      
      var event = parsedRes[uuid];
      if (event) {

        // parsedRes.splice

        // dispatch(removeEvent(event.key));
      }

      dispatch(uiStopLoading());
    })
    .catch(err => {
      console.log('viewRemoveEvent: ' + err);
      dispatch(uiStopLoading());
    });
  };
};

export const getEvent = () => {
  return dispatch => {
    dispatch(uiStartLoading());

    fetcher('events.json').then(parsedRes => {
      let eventsList = [];
      for (let key in parsedRes) {
        parsedRes[key].uuid = key;
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

export const removeEvent = (key) => {
  return {
    type: REMOVE_EVENT,
    eventKey: key
  }
};

export const viewEvent = (eventData) => {
  return {
    type: VIEW_EVENT,
    eventData: eventData
  };
};
