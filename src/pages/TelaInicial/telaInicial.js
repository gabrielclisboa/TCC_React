import * as React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './style.js';
import LinearGradient from 'react-native-linear-gradient';
import {fotoBairro} from '../../../Assets/index.js';
import {icTela} from '../../../Assets/index.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Component} from 'react';

class telaInicial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <LinearGradient
        colors={['#00A896', '#457B9D']}
        style={styles.containerGlobal}>
        <View style={styles.containerTexto}>
          <Text style={styles.msgBemvindo}>Bem vindo</Text>
        </View>

        <ImageBackground source={fotoBairro} style={styles.image}>
          <LinearGradient
            colors={['#0000', '#000000']}
            style={styles.contarinerImagem}>
            <Image source={icTela} style={styles.icone} />
            <Text style={styles.texto}>Associação de Bairros do Cabral</Text>
          </LinearGradient>
        </ImageBackground>

        <View style={styles.containerOpcoes}>
          <TouchableOpacity
            style={styles.opacity}
            onPress={() => this.props.navigation.navigate('Tela Forum')}>
            <Icon name="comment" size={24} color="white" />
            <Text style={styles.button}>FORUM</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.opacity}
            onPress={() => this.props.navigation.navigate('Tela Inicial')}>
            <Icon name="bank" size={24} color="white" />
            <Text style={styles.button}>ADMINISTRAÇÃO</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.opacity}
            onPress={() => this.props.navigation.navigate('Tela Membros')}>
            <Icon name="group" size={24} color="white" />
            <Text style={styles.button}>MEMBROS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.opacity}
            onPress={() => this.props.navigation.navigate('Tela Sobre Nos')}>
            <Icon name="info" size={24} color="white" />
            <Text style={styles.button}>SOBRE NÓS</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}
export default telaInicial;
