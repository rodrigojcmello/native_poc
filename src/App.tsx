import { createAppContainer, createStackNavigator } from 'react-navigation';
import Modelo from './screens/Modelo';
import Teste from './screens/Teste';

const App = createStackNavigator(
    {
        Home: { screen: Modelo },
        Teste: { screen: Teste },
    },
    {
        initialRouteName: 'Teste'
    }
);

export default createAppContainer(App);