import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TelaCarregamento from './TelaCarregamento/TelaCarregamento.js';
import telaLogin from './TelaLogin/telaLogin.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen  name="Login" component={telaLogin} />
        <Stack.Screen options={{headerShown:false }} name="TelaCarregamento" component={TelaCarregamento} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
