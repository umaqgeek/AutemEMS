import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

import ImageBack from '../../assets/images/Logo-AUTeM-Alumni-UTeM.png';
import Dashboard from '../mainTabs/dashboard';

import { connect } from 'react-redux';
import {
  setCurrentAlumni,
  getCurrentAlumni,
  viewAlumni,
  addAlumni
} from '../../store/actions/index';

import Icon from 'react-native-vector-icons/Ionicons';
import { validation, NOT_LEAVE_BLANK } from '../../Utilities/MyFunc';

class LoginScreen extends Component {

  state = {
    inputData: {
      email: '',
      phone: ''
    }
  };

  onTypeInput = (val, key) => {
    this.setState(prevState => {
      return {
        inputData: {
          ...prevState.inputData,
          [key]: val
        }
      }
    });
  };

  loginHandler = () => {

    const alumni = {
      key: Math.random(),
      email: this.state.inputData.email,
      phone: this.state.inputData.phone
    };

    let isValid = true;
    for (let key in alumni) {
      isValid = validation(alumni[key], NOT_LEAVE_BLANK) && isValid;
    }

    if (isValid) {
      this.props.onSetAuth(alumni);
      this.props.onAddAlumni(alumni);

      // if (this.props.isLoading) {
        Dashboard();
      // }

    } else {
      alert('Do not leave blank!');
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={ImageBack}
            style={styles.imageBack}
          />
          <Text style={styles.title}>UTeM's Alumni</Text>
          <Text style={styles.title}>Event Management System</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.titleInput}>Sign In Account</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email address"
              onChangeText={(val) => this.onTypeInput(val, 'email')}
              value={this.state.inputData.email}
              keyboardType="email-address"
            />
            <Text style={styles.exampleInput}>{"Eg.: umar@gmail.com"}</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your phone number"
              onChangeText={(val) => this.onTypeInput(val, 'phone')}
              value={this.state.inputData.phone}
              keyboardType="numeric"
            />
            <Text style={styles.exampleInput}>{"Eg.: 0199737573"}</Text>
            <TouchableOpacity
              style={styles.buttonInput}
              onPress={this.loginHandler}
            >
              <Text style={styles.buttonTextInput}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
};

const mapStateToDispath = state => {
  return {
    currentAlumni: state.alumniData.currentAlumni,
    alumnis: state.alumniData.alumnis,
    isLoading: state.uiData.isLoading
  };
};

const mapPropsToDispatch = dispatch => {
  return {
    onSetAuth: (alumni) => dispatch(setCurrentAlumni(alumni)),
    onGetAuth: (alumni) => dispatch(getCurrentAlumni(alumni)),
    onGetAlumnis: () => dispatch(viewAlumni()),
    onAddAlumni: (alumni) => dispatch(addAlumni(alumni))
  };
};

const fontColor = '#000';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    margin: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: fontColor
  },
  inputContainer: {
    alignItems: 'center',
    width: '100%'
  },
  titleInput: {
    marginTop: '5%',
    fontSize: 15,
    color: fontColor
  },
  buttonInput: {
    borderWidth: 1,
    borderRadius: 10,
    width: "60%",
    padding: 10,
    marginTop: "5%",
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 255, 0.7)'
  },
  buttonTextInput: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff'
  },
  exampleInput: {
    fontSize: 12,
    fontStyle: 'italic',
    margin: 2,
    width: "80%",
    padding: 2,
    color: fontColor
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#999',
    backgroundColor: '#fff',
    marginTop: '5%',
    padding: 10,
    width: '80%',
    color: fontColor
  },
  imageBack: {
    resizeMode: 'contain',
    width: "100%",
    height: 100
  }
});

export default connect(mapStateToDispath, mapPropsToDispatch)(LoginScreen);
