import {
  ADD_EVENT,
  REMOVE_EVENT,
  UPDATE_EVENT,
  REMOVE_ALL_EVENT,
  VIEW_EVENT
} from './actionTypes';

const initialEvents = {
  eventData: [
    {
      id: 1,
      name: "Perjumpaan AGM Tahunan",
      address: "Tingkat 2, Hotel MITC, 75450, Ayer Keroh, Melaka.",
      time: "02:00 PM",
      date: "14 DEC 2018"
    },
    {
      id: 2,
      name: "Majlis Makan-Makan dengan Ahli Kelab",
      address: "Tingkat 1, Hotel Muzadfar, 75450, Ayer Keroh, Melaka.",
      time: "08:00 PM",
      date: "21 JAN 2019"
    },
    {
      id: 3,
      name: "BBQ Makan-Makan Pantai Klebang",
      address: "Pantai Klebang, Melaka",
      time: "05:30 PM",
      date: "04 APR 2019"
    }
  ]
};

const eventsReducer = (state=initialEvents, action) => {
  switch (action.type) {
    case VIEW_TEMPAT:
      return {
        ...state,
        eventData: state.eventData
      };
    default:
      return state;
  }
};

export default eventsReducer;
