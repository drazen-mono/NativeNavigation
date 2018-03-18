import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const NavigationButtons = ({ text, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.buttons}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttons: {
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
    margin: 40
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    padding: 10
  },
});

export default NavigationButtons;
