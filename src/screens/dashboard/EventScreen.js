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
import ModalDetailEvent from '../../components/modals/ModalDetailEvent';

import { connect } from 'react-redux';
import {
  selectedEvent,
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
    localChoosedEvent: null
  };

  setModalVisible(visibleData) {
    this.setState({
      localChoosedEvent: visibleData
    });
  }

  addEventPopScreen = () => {
    this.props.navigator.push({
      screen: "autemems.eventScreens.addEventScreen",
      title: "Add Event",
      animated: true,
      animationType: 'fade'
    });
  };

  onViewDetail = (key) => {
    let eventData = this.props.eventsData.eventData.find((ed) => {
      return ed.key === key
    });
    this.props.setSelectedEvent(eventData);

    this.setModalVisible(eventData);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={this.props.eventsData.eventData}
            renderItem={({ item }) => (
              <EventBoxes data={item} onDetail={() => this.onViewDetail(item.key)} />
            )}
          />
        </ScrollView>
        <View style={styles.addButton}>
          <AddButton onAddEventPopScreen={this.addEventPopScreen} />
        </View>
        <ModalDetailEvent
          visible={this.state.localChoosedEvent !== null}
          modalData={this.state.localChoosedEvent}
          onModalClose={() => {
            this.setModalVisible(null);
          }}
        />
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
    eventsData: state.eventData,
    choosedEvent: state.eventData.choosedEvent
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getViewEvents: () => dispatch(viewEvent()),
    setSelectedEvent: (eventSelected) => dispatch(selectedEvent(eventSelected))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventScreen);
