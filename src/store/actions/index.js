export const BASE_URL = 'https://umar-react-nativ-1547611996954.firebaseio.com';
// export const BASE_URL = 'http://10.124.13.139:8080';

export {
  selectedEvent,
  addEvent,
  getEvent,
  deleteEvent,
  viewEvent
} from './events';

export {
  addAlumni,
  removeAlumni,
  updateAlumni,
  removeAllAlumni,
  viewAlumni,
  setCurrentAlumni,
  getCurrentAlumni
} from './alumnis';

export {
  uiStartLoading,
  uiStopLoading
} from './ui';
