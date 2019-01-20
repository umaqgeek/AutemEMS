import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'

const ListOfBoxes = (props) => (
  <TouchableOpacity style={styles.container} key={props.data.key}>
    <View style={styles.eventIconLeft}>
      <Icon
        name="event-note"
        size={25}
      />
    </View>
    <View>
      <Text style={styles.textName}>{props.data.name}</Text>
      <Text style={styles.textAddress}>{props.data.address}</Text>
      <View style={styles.datetime}>
        <Text style={styles.textDate}>{props.data.date}, </Text>
        <Text style={styles.textTime}>{props.data.time}, </Text>
        <Text style={styles.textTime}>Created by {props.data.createdBy.email}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default ListOfBoxes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingTop: 20,
    paddingBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5
  },
  eventIconLeft: {
    paddingRight: 10
  },
  textName: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  textAddress: {
    fontSize: 12
  },
  textDate: {
    fontSize: 10,
    fontStyle: 'italic'
  },
  textTime: {
    fontSize: 10,
    fontStyle: 'italic'
  },
  datetime: {
    flexDirection: 'row'
  }
});
