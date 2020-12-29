import * as React from 'react';
import {Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {icLogin} from '../../../Assets/index.js';
import styles from './style.js';
import LinearGradient from 'react-native-linear-gradient';
import {Component} from 'react';
import usuarioServices from '../../services/usuario/usuarioServices.js';

class telaCadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        nome: '',
        email: '',
        senha: '',
        telefone: '',
      },
      errorNome: '',
      errorEmail: '',
      errorSenha: '',
      resultMessage: '',
    };
  }

  handleChangeNome = (event) => {
    this.setState({
      nome: event.target.value,
    });
  };
  handleChangeSenha = (event) => {
    this.setState({
      senha: event.target.value,
    });
  };
  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleChangeTelefone = (event) => {
    this.setState({
      telefone: event.target.value,
    });
  };

  cadastro() {
    usuarioServices
      .cadastrarNovoUsuario(this.state.user)
      .then((data) => {
        console.log(data);
        this.setState({resultMessage: 'sucesso'});
      })
      .catch((error) => {
        console.log('1' + error);
        this.setState({resultMessage: error.message});
        throw error;
      });
  }

  render() {
    return (
      <LinearGradient
        colors={['#00A896', '#457B9D']}
        style={styles.containerGlobal}>
        <Image source={icLogin} style={styles.image} />
        <Text style={styles.textoCrieConta}>Crie sua conta agora!</Text>

        <TextInput
          value={this.state.user.nome}
          onChange={this.handleChangeNome}
          placeholderTextColor="white"
          placeholder="Nome"
          style={styles.textInput}
        />

        <TextInput
          onChange={this.handleChangeEmail}
          placeholderTextColor="white"
          placeholder="Email"
          style={styles.textInput}
        />

        <TextInput
          onChange={this.handleChangeTelefone}
          placeholderTextColor="white"
          placeholder="Número do telefone"
          style={styles.textInput}
        />

        <TextInput
          onChange={this.handleChangeSenha}
          placeholderTextColor="white"
          placeholder="Senha"
          style={styles.textInput}
        />

        <TextInput
          placeholderTextColor="white"
          placeholder="Confirmar senha"
          style={styles.textInput}
        />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Tela Inicial')}>
          <Text style={styles.button}>CADASTRAR</Text>
        </TouchableOpacity>
        <Text>{this.state.user.email}</Text>
        <Text>{this.state.user.nome}</Text>
        <Text>{this.state.user.senha}</Text>
      </LinearGradient>
    );
  }
}

export default telaCadastro;
