import {
  SELECTED_EVENT,
  ADD_EVENT,
  // REMOVE_EVENT,
  // UPDATE_EVENT,
  // REMOVE_ALL_EVENT,
  VIEW_EVENT
} from '../actions/actionTypes';

const initialState = {
  eventData: [
    // {
    //   key: "01",
    //   name: "Perjumpaan AGM Tahunan",
    //   address: "Tingkat 2, Hotel MITC, 75450, Ayer Keroh, Melaka.",
    //   time: "02:00 PM",
    //   date: "14 DEC 2018",
    //   createdBy: {
    //     email: "umar@gmail.com"
    //   }
    // },
  ],
  choosedEvent: null
};

const eventsReducer = (state=initialState, action) => {
  switch (action.type) {
    case SELECTED_EVENT:
      return {
        ...state,
        choosedEvent: action.eventData
      };
    case ADD_EVENT:
      return {
        ...state,
        eventData: state.eventData.concat(action.eventData)
      };
    case VIEW_EVENT:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default eventsReducer;
