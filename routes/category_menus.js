module.exports = app => {
    const category_menus = require('../controllers/category_menus');

    var router = require('express').Router();

    router.post("/", category_menus.create);
  
    router.get("/", category_menus.findAll);
  
    router.get("/:id", category_menus.findOne);
  
    router.put("/:id", category_menus.update);
  
    router.delete("/:id", category_menus.delete);
  
    app.use('/api/category_menus', router);
}