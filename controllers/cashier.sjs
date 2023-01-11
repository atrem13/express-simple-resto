const db = require('../models');
const Cashier = db.cashiers;
const Op = db.Sequelize.Op;

exports.create = (req, res, next) => {
    if(!req.body.name){
        return res.status(400).send({message: 'name cant be empty'});
    }
    if(!req.body.phone_number){
        return res.status(400).send({message: 'phone number cant be empty'});
    }
    if(!req.body.address){
        return res.status(400).send({message: 'address cant be empty'});
    }
    if(!req.body.username){
        return res.status(400).send({message: 'username cant be empty'});
    }
    if(!req.body.password){
        return res.status(400).send({message: 'password cant be empty'});
    }

    const data = {
        name:req.body.name,
        phone_number:req.body.phone_number,
        address:req.body.address,
        username:req.body.username,
        password:req.body.password,
    };
}