import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import ExtraButtons from '../../components/ExtraButtons';

class Screen extends Component {
  navigate = (text) => {
    this.props.navigator.push({
      screen: 'ExtraEdit',
      title: 'Screen 3',
      passProps: {
        name: text
      }
    });
  };

  addBadge = () => {
    this.props.navigator.setTabBadge({
      badge: 12
    });
  }

  removeBadge = () => {
    this.props.navigator.setTabBadge({
      badge: 0
    });
  }

  styleNavigation = () => {
    this.props.navigator.setStyle({
      navBarBackgroundColor: 'blue',
      navBarTitleTextCentered: true,
      statusBarHidden: true
    });
  }

  showNotification = () => {
    this.props.navigator.showInAppNotification({
      screen: 'ExtraNotification',
      autoDismissTimerSec: 2,
      passProps: {
        text: 'Drazen'
      }
    })
  };

  render() {
    return (
      <View style={[styles.container]}>
        <View style={styles.child}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Please enter your name:</Text>
            <TextInput
              onChangeText={(text) => this.setState({ name: text })}
            />
            <Button
              onPress={() => this.navigate(this.state.name)}
              title="Submit"
            />
          </View>
        </View>
        <View style={styles.child}>
          <ExtraButtons
            title1="Style Navigation"
            title2="Notification"
            onPressButton1={this.styleNavigation}
            onPressButton2={this.showNotification}
          />
        </View>
        <View style={styles.child}>
          <ExtraButtons
            title1="Add Badge"
            title2="Remove Badge"
            onPressButton1={this.addBadge}
            onPressButton2={this.removeBadge}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  child: {
    flex: 1,
    margin: 10
  },
  text: {
    color: 'black',
    fontSize: 15
  },
  textContainer: {
    top: 30,
    alignItems: 'stretch',
  }
});

export default Screen;