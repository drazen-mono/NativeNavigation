import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const ExtraButtons = ({ title1, title2, onPressButton1, onPressButton2 }) => (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <Button
                onPress={onPressButton1}
                title={title1}
            />
        </View>
        <View style={styles.buttonContainer}>
            <Button
                onPress={onPressButton2}
                title={title2}
            />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        margin: 5
    }
});

export default ExtraButtons;
