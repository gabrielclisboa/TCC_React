import * as React from 'react';
import {Text, Image, View} from 'react-native';
import {logo} from '../../../Assets/index.js';
import styles from './style.js';

class TelaCarregamentoFuncao extends React.Component {
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('TelaTransicao');
    }
  }

  render() {
    return (
      <View style={styles.ViewGlobal}>
        <Image source={logo} />
        <Text style={styles.Texto2}>Associação de bairros do </Text>
        <Text style={styles.Texto}>Cabral</Text>
      </View>
    );
  }
}

export default TelaCarregamentoFuncao;
