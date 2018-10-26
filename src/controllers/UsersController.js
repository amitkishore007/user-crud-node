const User  = require('../models/User');

module.exports = {

    all(req, res, next) {
        User.find({})
            .then((users)=> res.status(200).send({status: 'success',data: users}))
            .catch(next);
    },
    get(req, res, next) {
        const userId = req.params.id;
        User.findOne({_id: userId})
            .then((user) => res.status(200).send({
                status: 'success',
                data: user
            }))
            .catch(next);
    },
    create(req, res, next) {
        User.create(req.body)
            .then((user)=>res.status(201).send({status:'success',data: user}))
            .catch(next);
    },
    update(req, res, next) {
        const userId = req.params.id;
        User.updateOne({_id: userId}, req.body)
            .then(() => User.findOne({_id: userId}))
            .then((user) => res.status(200).send({
                status: "success",
                data: user
            }))
            .catch(next);
    },
    delete(req, res, next) {
        const userId = req.params.id;
        User.findOneAndDelete({_id: userId})
            .then(() => User.findOne({_id: userId}))
            .then((user) => res.status(200).send({
                status: "success",
                data: user
            }))
            .catch(next);
    }

};