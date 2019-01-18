import {
  // ADD_EVENT,
  // REMOVE_EVENT,
  // UPDATE_EVENT,
  // REMOVE_ALL_EVENT,
  VIEW_EVENT
} from './actionTypes';

// export const addEvent = (eventData) => {
//   return {
//     type: ADD_EVENT,
//     eventData: eventData
//   };
// };

export const viewEvent = () => {
  return {
    type: VIEW_EVENT
  };
};
