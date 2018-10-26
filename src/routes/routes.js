const UsersController = require('../controllers/UsersController');

module.exports = (app)=>{
    app.get('/api/v1/all', UsersController.all);
    app.get('/api/v1/get/:id', UsersController.get);
    app.post('/api/v1/create', UsersController.create);
    app.put('/api/v1/update/:id',UsersController.update);
    app.delete('/api/v1/delete/:id', UsersController.delete);
};