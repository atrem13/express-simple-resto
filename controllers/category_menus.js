const db = require('../models');
const CategoryMenu = db.category_menus;
const Op = db.Sequelize.Op;

exports.create = (req, res, next) => {
    if(!req.body.name){
        return res.status(400).send({message: 'name cant be empty'})
    }
    if(!req.body.description){
        return res.status(400).send({message: 'description cant be empty'})
    }

    const data = {
        name: req.body.name,
        description: req.body.description,
    };

    CategoryMenu.create(data)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({message: err.message});
        });
}

exports.findAll = (req, res, next) => {
    const name = req.body.name;
    let condition = name ? { name: {[Op.like]: `%${name}%`} } : '';

    CategoryMenu.findAll({
            where:condition,
            include: [
                'Menus'
            ]
        })
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({message: err.message});
        });
}

exports.findOne = (req, res, next) => {
    const id = req.params.id;

    CategoryMenu.findByPk(id, {
            include: [
                'Menus'
            ]
        })
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

    CategoryMenu.update(req.body, {
        where: {id: id},
    })
    .then(data => {
        if(data == 1){
            CategoryMenu.findByPk(id, {
                include: [
                    'Menus'
                ]
            }).then(updateData => {
                res.send(updateData);
            })
        }else{
            res.status(404).send({message: `cant update data with id ${id}`});
        }
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
}

exports.delete = (req, res, next) => {
    const id = req.params.id;

    CategoryMenu.destroy({
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
