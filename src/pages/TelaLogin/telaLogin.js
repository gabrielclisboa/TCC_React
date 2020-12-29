import * as React from 'react';
import {Text, Image, View, TouchableOpacity, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style.js';
import {icLogin} from '../../../Assets/index.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Component} from 'react';

class telaLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <LinearGradient
        colors={['#457B9D', '#00A896']}
        style={styles.linearGradient}>
        <Image style={styles.image} source={icLogin} />

        <View>
          <Text style={styles.texto1}>Acesse sua conta agora!</Text>
        </View>
        <View style={styles.containerInput}>
          <Icon name="envelope" size={24} color="white" style={styles.icone} />
          <TextInput
            placeholderTextColor="white"
            placeholder="Email"
            style={styles.textInput}
          />
        </View>
        <View style={styles.containerInput}>
          <Icon name="lock" size={30} color="white" style={styles.icone} />
          <TextInput
            placeholderTextColor="white"
            placeholder="Senha"
            style={styles.textInput}
          />
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Tela Inicial')}>
          <Text style={styles.button}>ENTRE AGORA</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

export default telaLogin;
