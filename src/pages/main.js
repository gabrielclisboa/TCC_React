import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import telaCarregamento from './TelaCarregamento/TelaCarregamento.js';
import telaLogin from './TelaLogin/telaLogin.js';
import telaInicial from './TelaInicial/telaInicial.js';
import telaCadastro from './TelaCadastro/telaCadastro.js';
import telaTransicao from './TelaTransicao/telaTransicao.js';
import telaSobreNos from './TelaSobreNos/telaSobreNos.js';
import telaMembros from './TelaMembros/telaMembros.js';
import telaForum from './TelaForum/telaForum.js';
import telaPublicacao from './TelaPublicacao/telaPublicacao.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="TelaCarregamento"
          component={telaCarregamento}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="TelaTransicao"
          component={telaTransicao}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={telaLogin}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="TelaCadastro"
          component={telaCadastro}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Tela Inicial"
          component={telaInicial}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Tela Sobre Nos"
          component={telaSobreNos}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Tela Membros"
          component={telaMembros}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Tela Forum"
          component={telaForum}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Tela Publicacao"
          component={telaPublicacao}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
