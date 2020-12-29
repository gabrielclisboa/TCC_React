import * as React from 'react';
import styles from './style.js';
import {View, Text} from 'react-native';
import {Component} from 'react';

class telaSobreNos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.containerGlobal}>
        <View style={styles.containerInformacao}>
          <Text style={styles.titulo}>Sobre nós</Text>
          <Text style={styles.texto}>
            A associação de Bairros do Cabral, acredita em uma sociedade moldada
            pela justiça e seguindo as leis e a justiça. Firt thing paiol de
            graça para o buizera e segundo 4 carnes devem ser permitidas na
            padoca com direitor a esconder umas 2 de baixo do arroz
          </Text>
        </View>
        <View style={styles.containerInformacao}>
          <Text style={styles.titulo}>Contatos</Text>
          <Text style={styles.texto}>Email:</Text>
          <Text style={styles.texto}>Telefone:</Text>
          <Text style={styles.texto}>Endereço:</Text>
        </View>
        <View style={styles.containerInformacao}>
          <Text style={styles.titulo}>Estatuto</Text>
          <Text style={styles.texto}>O estatuto dos caras né boy</Text>
        </View>
      </View>
    );
  }
}

export default telaSobreNos;
