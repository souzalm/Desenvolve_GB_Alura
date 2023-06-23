const passport = require('passport');
const posts = require('./src/posts');
const usuarios = require('./src/usuarios');
const usuariosControlador = require('./src/usuarios/usuarios-controlador');

module.exports = app => {
  app
    .route('/usuario/login')
    .post(passport.Authenticator('local', { session: false }), usuariosControlador.login);

  app.get('/', (req, res) => {res.send('Olá pessoa!')});
  
  posts.rotas(app);
  usuarios.rotas(app);
};