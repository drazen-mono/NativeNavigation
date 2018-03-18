import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';

class Screen extends Component {
    render() {
        return (
                <TouchableOpacity>
                    <Text style={styles.text}>Tap anywhere to dismiss!</Text>
                </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        textAlign: 'center',
    },
});

export default Screen;