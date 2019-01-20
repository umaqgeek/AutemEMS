import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import BackToLogin from './src/screens/mainTabs/backToLogin';

import {
  LoginScreen,
  SideDrawer,
  EventScreen,
  AddEventScreen,
  AlumniScreen,
  MeetingRoomScreen
} from './src/screens/index';

import configureStore from './src/store/configureStore';
const store = configureStore();

Navigation.registerComponent("autemems.login.LoginScreen", () => LoginScreen);
Navigation.registerComponent("autemems.sideDrawer.SideDrawer", () => SideDrawer);
Navigation.registerComponent("autemems.dashboard.EventScreen", () => EventScreen, store, Provider);
Navigation.registerComponent("autemems.eventScreens.addEventScreen", () => AddEventScreen, store, Provider);
Navigation.registerComponent("autemems.dashboard.AlumniScreen", () => AlumniScreen);
Navigation.registerComponent("autemems.dashboard.MeetingRoomScreen", () => MeetingRoomScreen);

Promise.all([
  BackToLogin()
]).then(() => {});
