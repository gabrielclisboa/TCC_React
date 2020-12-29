import * as React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style.js';
import {icLogin} from '../../../Assets/index.js';
import {Component} from 'react';

class telaTransicao extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <LinearGradient
        colors={['#00A896', '#457B9D']}
        style={styles.containerGlobal}>
        <Image source={icLogin} style={styles.image} />
        <Text style={styles.msgBemvindo}>Seja Bem Vindo</Text>

        <Text style={styles.texto}>Junte-se à associação de</Text>
        <Text style={styles.texto}>moradores do seu bairro e</Text>
        <Text style={styles.texto}> compartilhe experiências</Text>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('TelaCadastro')}>
          <Text style={styles.button}>CADASTRO</Text>
        </TouchableOpacity>

        <View style={{marginTop: 8}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.texto}>Já possuo uma conta</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

export default telaTransicao;
