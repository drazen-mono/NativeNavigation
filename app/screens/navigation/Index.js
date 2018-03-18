import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import NavigationButtons from '../../components/NavigationButtons';

class Screen extends Component {
    showModal = () => {
        this.props.navigator.showModal({
            screen: 'GenericScreen',
            title: 'Modal Screen',
            animationType: 'slide-up',
            passProps: {
                color: { backgroundColor: 'red', flex: 1 }
            }
        })
    };

    showLightBox = () => {
        this.props.navigator.showLightBox({
            screen: 'LightBox',
            style: {
                backgroundBlur: 'dark',
                backgroundColor: 'green',
                tapBackgroundToDismiss: true
            }
        })
    };

    showPush = () => {
        this.props.navigator.push({
            screen: 'GenericScreen',
            title: 'Push Screen',
            subtitle: 'Welcome',
            animated: true,
            animationType: 'slide-horizontal',
            backButtonHidden: false,
            passProps: {
                color: { backgroundColor: 'blue', flex: 1 }
            }
        })
    };

    render() {
        return (
            <View style={[styles.container]}>
                <NavigationButtons
                    text='Modal'
                    onPress={this.showModal}
                />
                <NavigationButtons
                    text='Light Box'
                    onPress={this.showLightBox}
                />
                <NavigationButtons
                    text='Push'
                    onPress={this.showPush}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    }
});

export default Screen;