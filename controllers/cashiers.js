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

    Cashier.create(data)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({message: err.message});
        });
}

exports.findAll = (req, res, next) => {
    const name = req.body.name;
    let condition = name ? { name: {[Op.like]: `%${name}%`} } : '';

    Cashier.findAll({
            where:condition
        })
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({message: err.message});
        });
}
exports.findOne = (req, res, next) => {
    const id = req.params.id;

    Cashier.findByPk(id)
        .then(data => {
            if(data){
                res.send(data);
            }else{
                res.status(404).send({message: `cant find data with id ${id}`});
            }
        }).catch(err => {
            res.status(500).send({message: err.message});
        });
}

exports.update = (req, res, next) => {
    const id = req.params.id;

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

    const data = {
        name:req.body.name,
        phone_number:req.body.phone_number,
        address:req.body.address,
        username:req.body.username,
    };

    if(req.body.password){
        data.password = req.body.password;
    }

    Cashier.update(data, {
        where: {id: id},
        individualHooks: true
    })
    .then(data => {
        if(data){
            res.send(data);
        }else{
            res.status(404).send({message: data});
        }
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
}

exports.delete = (req, res, next) => {
    const id = req.params.id;

    Cashier.destroy({
        where: {id: id},
    })
    .then(data => {
        if(data){
            res.send({message: `data deleted`});
        }
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
}