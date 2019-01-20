import { Navigation } from 'react-native-navigation';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const dashboard = () => {
  Promise.all([
    IconMaterial.getImageSource("event", 25),
    IconFontAwesome.getImageSource("users", 25),
    IconEvil.getImageSource("user", 25),
    IconMaterial.getImageSource("menu", 25)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "autemems.dashboard.EventScreen",
          label: "Event",
          title: "Event List",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[3],
                title: "Menu",
                id: "toggleTepi"
              }
            ]
          }
        },
        {
          screen: "autemems.dashboard.MeetingRoomScreen",
          label: "Meeting Room",
          title: "Meeting Room List",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[3],
                title: "Menu",
                id: "toggleTepi"
              }
            ]
          }
        },
        {
          screen: "autemems.dashboard.AlumniScreen",
          label: "Alumni",
          title: "Alumni List",
          icon: sources[2],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[3],
                title: "Menu",
                id: "toggleTepi"
              }
            ]
          }
        }
      ],
      tabsStyle: {
        tabBarSelectedButtonColor: "orange"
      },
      drawer: {
        left: {
          screen: "autemems.sideDrawer.SideDrawer"
        }
      },
      appStyle: {
        tabBarSelectedButtonColor: "orange"
      }
    });
  });
};

export default dashboard;
