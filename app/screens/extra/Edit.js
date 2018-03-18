import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Screen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Edit',
        id: 'edit',
        buttonColor: 'black',
        buttonFontSize: 14,
        buttonFontWeight: '600'
      }]
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'edit') {
        this.props.navigator.push({
          screen: 'GenericScreen',
          title: 'Edit',
          passProps: {
            color: { backgroundColor: 'yellow', flex: 1 }
          }
        });
      }
    }
  }

  render() {
    const { name } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Hi there {name}!!!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    color: 'blue',
    fontSize: 30,
    margin: 20
  }
});

export default Screen;