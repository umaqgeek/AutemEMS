import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native';

import { connect } from 'react-redux';
import {
  updateAlumni
} from '../../store/actions/index';

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
        <Text>To be developed ...</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    zIndex: -20
  }
});

const mapStateToProps = (state) => {
  return {
    alumnis: state.alumniData.alumnis
  };
};

export default connect(mapStateToProps)(AlumniScreen);
