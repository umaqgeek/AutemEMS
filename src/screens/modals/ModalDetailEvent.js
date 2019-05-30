import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableHighlight
} from 'react-native';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';

class ModalDetailEvent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Modal
          {...this.props}
          animationType="slide"
          transparent={false}
          onRequestClose={() => {
            // alert('Modal has been closed.');
          }}>
          <View>
            <View><Text>{JSON.stringify(this.props.modalData)}</Text></View>
            <View><Text>{JSON.stringify(this.props.modalData)}</Text></View>
          </View>

          <TouchableHighlight
            onPress={() => this.props.onDeleteEvent(this.props.modalData.uuid)}>
            <View style={styles.deleteButtonContainer}>
              <IconIonicons
                name="md-trash"
                size={25}
              />
            <Text style={styles.closeButtonText}>  Delete</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={this.props.onModalClose}>
            <View style={styles.closeButtonContainer}>
              <IconMaterial
                name="close"
                size={25}
              />
            <Text style={styles.closeButtonText}>  Close</Text>
            </View>
          </TouchableHighlight>
        </Modal>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '10%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeButtonContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    width: 300,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    backgroundColor: 'rgba(0, 0, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  deleteButtonContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    width: 300,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeButtonText: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default ModalDetailEvent;
