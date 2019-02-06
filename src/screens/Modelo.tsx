import * as React from 'react';
import { Alert, Button, Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class Modelo extends React.Component {

    onAlert(): void {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                { text: 'Ask me later', onPress: (): void => console.log('Ask me later pressed') },
                { text: 'Cancel', onPress: (): void => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: (): void => console.log('OK Pressed') },
            ],
            { cancelable: false }
        );
    }

    render(): JSX.Element {
        return (
            <View style={ styles.container }>
                <Text style={ styles.welcome }>Seja bem-vindo ao React Native!</Text>
                <Text style={ styles.instructions }>To get started, edit App.js</Text>
                <Text style={ styles.instructions }>{ instructions }</Text>
                <Button
                    onPress={ this.onAlert }
                    title={ 'Leia Mais' }
                    color={ '#841584' }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default Modelo;