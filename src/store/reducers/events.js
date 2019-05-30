import {
  SELECTED_EVENT,
  ADD_EVENT,
  REMOVE_EVENT,
  // UPDATE_EVENT,
  // REMOVE_ALL_EVENT,
  VIEW_EVENT
} from '../actions/actionTypes';

const initialState = {
  eventData: [
    // {
    //   uuid: "<firebase id>",
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
    case REMOVE_EVENT:
      var pos = state.eventData.map((e) => { 
        return e.key; 
      }).indexOf(action.eventKey);
      return {
        ...state,
        eventData: state.eventData.splice(pos, 1)
      };
    case VIEW_EVENT:
      return {
        ...state,
        eventData: action.eventData
      };
    default:
      return state;
  }
};

export default eventsReducer;
