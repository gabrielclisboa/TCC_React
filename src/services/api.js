import axios from 'axios'; //importa a dependência

/* Endereços para cada emulador/simulador:
  Genymotion:              http://10.0.3.2:3333/
  Emulador Android Studio: http://10.0.2.2:3333/
 ** Simulador IOS:           http://localhost:3333/
 */
const api = axios.create({
  baseURL: 'http://10.0.2.2:3333', //importando a api axios e deifnindo minha url de base, isto é, isso vai a rota
});

export default api;
