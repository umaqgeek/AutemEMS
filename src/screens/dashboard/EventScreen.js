import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import AddButton from '../../components/buttons/AddButton';

class EventScreen extends Component {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavEvent);
  }

  onNavEvent = (event) => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "toggleTepi") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  }

  state = {
    eventList: []
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.addButton}>
          <AddButton />
        </View>
        <Text>Event Screen</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%"
  },
  addButton: {
    position: 'absolute',
    marginLeft: "70%",
    marginTop: "100%",
    zIndex: 20
  }
});

export default EventScreen;
