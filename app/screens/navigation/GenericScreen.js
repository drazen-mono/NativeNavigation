import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Screen extends Component {
  render() {
    const { color } = this.props;
    return (
      <View style={color} />
    );
  }
}

export default Screen;
