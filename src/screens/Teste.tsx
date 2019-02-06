import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { FluentNavigator } from 'navigation';

interface Props {
    navigation: FluentNavigator;
}

class Teste extends React.PureComponent<Props> {

    navegar = (): void => {
        this.props.navigation.navigate('Home');
    };

    render(): JSX.Element {
        return (
            <View>
                <Text>Teste</Text>
                <Button
                    title='Ir para Modelo'
                    onPress={ this.navegar }
                />
            </View>
        );
    }

}

export default Teste;