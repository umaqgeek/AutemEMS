import { Navigation } from 'react-native-navigation';

const BackToLogin = () => {
  Promise.all([
  ]).then(sources => {
    Navigation.startSingleScreenApp({
      screen: {
        screen: "autemems.login.LoginScreen",
        title: "Sign In"
      }
    });
  });
};

export default BackToLogin;
