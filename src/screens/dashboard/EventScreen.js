import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native';

import AddButton from '../../components/buttons/AddButton';
import ListOfBoxes from '../../components/lists/ListOfBoxes';

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

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={this.state.eventList}
            renderItem={({ item }) => (
              <ListOfBoxes data={item} />
            )}
          />
        </ScrollView>
        <View style={styles.addButton}>
          <AddButton />
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
