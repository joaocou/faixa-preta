const express = require('express');
const routes = express.Router();

const { verifyToken } = require('./middlewares/auth');

const UserController = require('./controllers/UserController');
const MoveController = require('./controllers/MoveController');
const ActivityController = require('./controllers/ActivityController');

routes.get('/', (req, res) => {
    res.json({ status: 'Online', message: 'Seja bem vindo a API do Faixa Preta!' });
});

//User
routes.get('/verifytoken', verifyToken, (req, res) => {
    res.json({ auth: true });
});

routes.route('/login')
    .post(UserController.login);

/* routes.route('/users')
    .post(UserController.create)
    .get(UserController.findAll); */

/* routes.route('/users/:user_id')
    .put(UserController.update)
    .delete(UserController.delete)
    .get(UserController.findOne); */


//Move
routes.route('/moves').get(MoveController.findAll);
routes.post('/moves', verifyToken, MoveController.create);

routes.route('/moves/:move_id').get(MoveController.findOne);
routes.put('/moves/:move_id', verifyToken, MoveController.update);
routes.delete('/moves/:move_id', verifyToken, MoveController.delete);

//Activity
routes.route('/activities').get(ActivityController.findAll);
routes.post('/activities', verifyToken, ActivityController.create);

routes.route('/activities/:activity_id').get(ActivityController.findOne);
routes.put('/activities/:activity_id', verifyToken, ActivityController.update);
routes.delete('/activities/:activity_id', verifyToken, ActivityController.delete); 

module.exports = routes;