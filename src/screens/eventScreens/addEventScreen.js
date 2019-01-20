import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';

import { connect } from 'react-redux';
import { addEvent } from '../../store/actions/index';

import DateTimePicker from 'react-native-modal-datetime-picker';
import { formatDate, formatTime } from '../../Utilities/MyFunc';

class AddEventScreen extends Component {

  state = {
    eventName: '',
    eventAddress: '',
    isDatePickerVisible: false,
    isTimePickerVisible: false,
    datePicked: '',
    timePicked: ''
  };

  _showDateTimePicker = (key) => {
    console.log(this.state);
    this.setState({
      [key]: true
    });
  };
  _hideDateTimePicker = (key) => {
    this.setState({
      [key]: false
    });
  };
  _handleDateTimePicked = (val, key, keyHide) => {
    let valTemp = val;
    if (key === 'datePicked') {
      // val = valTemp.toLocaleDateString();
      val = formatDate(valTemp);
    } else {
      // val = valTemp.toLocaleTimeString();
      val = formatTime(valTemp.toLocaleTimeString().toString());
    }
    this.setState({
      [key]: val
    });
    this._hideDateTimePicker(keyHide);
  };

  onTypeData = (val, key) => {
    this.setState(prevState => {
      return {
        ...prevState,
        [key]: val
      };
    });
  };

  addEventHandler = () => {
    const eventData = {
      key: new Date().getUTCMilliseconds().toString(),
      name: this.state.eventName,
      address: this.state.eventAddress,
      time: this.state.timePicked,
      date: this.state.datePicked,
      createdBy: this.props.currentAlumni
    };

    this.props.onAddEvent(eventData);
    this.props.navigator.pop();
  };

  onCloseModal = () => {
    this.props.navigator.pop();
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollViewContainer}>

          <TextInput
            style={styles.textInput}
            placeholder="Enter event's name"
            keyboardType="default"
            value={this.state.eventName}
            onChangeText={(val) => this.onTypeData(val, 'eventName')}
          />
          <Text style={styles.exampleInput}>{"Eg.: Annual Grand Dinner"}</Text>

            <TextInput
              style={styles.textInput}
              placeholder="Enter event's address"
              keyboardType="default"
              value={this.state.eventAddress}
              onChangeText={(val) => this.onTypeData(val, 'eventAddress')}
            />
          <Text style={styles.exampleInput}>{"Eg.: Dewan Nizam, Hotel MiTC, Melaka"}</Text>

          <View style={styles.dateTimeInputContainer}>

            <TouchableOpacity onPress={() => this._showDateTimePicker('isDatePickerVisible')}>
              <TextInput
                style={[styles.textInput, styles.textInputDate]}
                placeholder="Pick event's date"
                keyboardType="default"
                editable={false}
                value={this.state.datePicked.toString()}
              />
            </TouchableOpacity>
            <DateTimePicker
              isVisible={this.state.isDatePickerVisible}
              onConfirm={(val) => this._handleDateTimePicked(val, 'datePicked', 'isDatePickerVisible')}
              onCancel={() => this._hideDateTimePicker('isDatePickerVisible')}
              minimumDate={new Date()}
              mode="date"
            />

          <TouchableOpacity onPress={() => this._showDateTimePicker('isTimePickerVisible')}>
              <TextInput
                style={[styles.textInput, styles.textInputTime]}
                placeholder="Pick event's time"
                keyboardType="default"
                editable={false}
                value={this.state.timePicked.toString()}
              />
            </TouchableOpacity>
            <DateTimePicker
              isVisible={this.state.isTimePickerVisible}
              onConfirm={(val) => this._handleDateTimePicked(val, 'timePicked', 'isTimePickerVisible')}
              onCancel={() => this._hideDateTimePicker('isTimePickerVisible')}
              minimumDate={new Date()}
              mode="time"
              is24Hour={false}
            />

          </View>

          <TouchableOpacity
            style={styles.buttonInput}
            onPress={this.addEventHandler}
          >
            <Text style={styles.buttonTextInput}>Add Event</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    );
  }
};

const fontColor = '#000';

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    // backgroundColor: '#f0f',
    width: '80%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 100, 0.1)',
    width: '100%'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#999',
    backgroundColor: '#fff',
    marginTop: '5%',
    padding: 10,
    // width: '80%',
    color: fontColor
  },
  dateTimeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInputDate: {

  },
  textInputTime: {

  },
  exampleInput: {
    fontSize: 12,
    fontStyle: 'italic',
    margin: 2,
    width: "80%",
    padding: 2,
    color: fontColor
  },
  buttonInput: {
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    padding: 10,
    marginTop: "5%",
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 255, 0.7)'
  },
  buttonTextInput: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff'
  }
});

const mapStateToProps = (state) => {
  return {
    currentAlumni: state.alumniData.currentAlumni
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddEvent: (eventData) => dispatch(addEvent(eventData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEventScreen);
