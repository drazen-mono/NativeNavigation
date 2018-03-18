import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Screen extends Component {
  render() {
    const { text } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Nice to meet you {text}!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'paleturquoise',
  },
  text: {
    fontSize: 20
  }
});

export default Screen;