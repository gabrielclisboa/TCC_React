import * as React from 'react';
import styles from './style.js';
import {View, Text, TouchableOpacity} from 'react-native';
import {Component} from 'react';

class telaForum extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.containerGlobal}>
        <View style={styles.containerPublicacao}>
          <View style={styles.containerDadosMensagem}>
            <Text style={styles.dadosMensagem}>nome</Text>
            <Text style={styles.dadosMensagem}>data</Text>
          </View>
          <View style={styles.containerConteudo}>
            <Text>titulo</Text>
            <Text>postagem de fato</Text>
          </View>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Tela Publicacao')}>
            <View style={styles.containerTexto}>
              <Text>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default telaForum;
