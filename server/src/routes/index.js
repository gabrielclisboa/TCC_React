const {Router} = require('express');
const router = Router();
const admin = require('firebase-admin');

const serviceAccount = require('../../jobsplace-firebase-adminsdk-ram3w-de08cd715f.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://jobsplace.firebaseio.com/',
});

const db = admin.database();
router.post('/cadastro', (req, res) => {
  let novoUser = {
    admin: false,
    email: req.body.email,
    nome: req.body.nome,
    senha: req.body.senha,
    telefone: req.body.numeroTelefone,
  };
  db.ref('usuarios').push(novoUser);
});
