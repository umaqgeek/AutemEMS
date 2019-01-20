import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native';

import AddButton from '../../components/buttons/AddButton';
import EventBoxes from '../../components/lists/EventBoxes';

import { connect } from 'react-redux';
import {
  viewEvent
} from '../../store/actions/index';

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
    eventList: this.props.eventsData.eventData
  };

  addEventPopScreen = () => {
    this.props.navigator.push({
      screen: "autemems.eventScreens.addEventScreen",
      title: "Add Event",
      animated: true,
      animationType: 'fade'
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={this.state.eventList}
            renderItem={({ item }) => (
              <EventBoxes data={item} />
            )}
          />
        </ScrollView>
        <View style={styles.addButton}>
          <AddButton onAddEventPopScreen={this.addEventPopScreen} />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: "100%"
  },
  scrollView: {
    zIndex: -20
  },
  addButton: {
    position: 'absolute',
    marginLeft: "70%",
    marginTop: "100%",
    zIndex: 20
  }
});

const mapStateToProps = (state) => {
  return {
    eventsData: state.eventData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getViewEvents: () => dispatch(viewEvent())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventScreen);
