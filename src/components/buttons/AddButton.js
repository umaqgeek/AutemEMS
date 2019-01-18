import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const AddButton = (props) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, props.style]}>
      <Icon
        name="add"
        size={30}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'rgba(0, 255, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#0f0'
  }
});

export default AddButton;
