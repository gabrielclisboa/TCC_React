import api from '../api.js';

class usuarioServices {
  cadastrarNovoUsuario(user) {
    console.log(user);
    return new Promise((resolve, reject) => {
      api
        .post('/newUser', {user})
        .then((response) => {
          console.log(response);
          if (response.data.success) {
            console.log('sucesso');
          } else {
            reject(response.error);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
}

const instance = new usuarioServices();

export default instance;
