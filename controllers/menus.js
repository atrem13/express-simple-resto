const db = require('../models');
const Menu = db.menus;
const Op = db.Sequelize.Op;

exports.create = (req, res, next) => {
    if(!req.body.title){
        return res.status(400).send({message: 'title cant be empty'})
    }
    if(!req.body.description){
        return res.status(400).send({message: 'description cant be empty'})
    }
    if(!req.body.category_menu_id){
        return res.status(400).send({message: 'category menu cant be empty'})
    }

    const data = {
        title: req.body.title,
        description: req.body.description,
        category_menu_id: req.body.category_menu_id,
    };

    Menu.create(data)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({message: err.message});
        });
}

exports.findAll = (req, res, next) => {
    const title = req.body.title;
    let condition = title ? { title: {[Op.like]: `%${title}%`} } : '';

    Menu.findAll({where:condition})
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({message: err.message});
        });
}

exports.findOne = (req, res, next) => {
    const id = req.params.id;

    Menu.findByPk(id)
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

    Menu.update(req.body, {
        where: {id: id},
    })
    .then(data => {
        if(data == 1){
            res.send({message: `data updated`});
        }else{
            res.status(404).send({message: `cant update data with id ${id}`});
        }
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
}

exports.delete = (req, res, next) => {
    const id = req.params.id;

    Menu.update(req.body, {
        where: {id: id},
    })
    .then(data => {
        if(data == 1){
            res.send({message: `data updated`});
        }else{
            res.status(404).send({message: `cant update data with id ${id}`});
        }
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
}
