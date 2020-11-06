import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TelaCarregamento from './TelaCarregamento/TelaCarregamento.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{headerShown:false }} name="TelaCarregamento" component={TelaCarregamento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
