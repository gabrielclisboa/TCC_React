import * as React from 'react';
import styles from './style.js';
import {View, Text} from 'react-native';
import {Component} from 'react';

class telaMembros extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.containerPessoa}>
        <View>
          <Text>nome</Text>
          <Text>telefone</Text>
        </View>
      </View>
    );
  }
}
export default telaMembros;
