import * as React from 'react';
import {Component} from 'react';
import styles from './style.js';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

class telaPublicacao extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <LinearGradient
        colors={['#00A896', '#457B9D']}
        style={styles.containerGlobal}>
        <View style={styles.containerFormulario}>
          <View>
            <Text style={styles.textMensagem}>
              Interaja com os outros moradores!
            </Text>
          </View>
          <View style={styles.containerInput}>
            <TextInput placeholder="Nome" style={styles.textInput} />
          </View>
          <View style={styles.containerInput}>
            <TextInput placeholder="Assunto" style={styles.textInput} />
          </View>
          <View style={styles.containerInput}>
            <TextInput placeholder="Texto" style={styles.textInput} />
          </View>
          <TouchableOpacity>
            <Text style={styles.button}>PUBLICAR</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}
export default telaPublicacao;
