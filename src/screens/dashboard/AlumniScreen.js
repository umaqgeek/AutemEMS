import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class AlumniScreen extends Component {

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

  render() {
    return (
      <View style={styles.container}>
        <Text>Alumni Screen</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AlumniScreen;
