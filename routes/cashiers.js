module.exports = app => {
    const cashiers = require('../controllers/cashiers');

    var router = require('express').Router();

    router.post("/", cashiers.create);
  
    router.get("/", cashiers.findAll);
  
    router.get("/:id", cashiers.findOne);
  
    router.put("/:id", cashiers.update);
  
    router.delete("/:id", cashiers.delete);
  
    app.use('/api/cashiers', router);
}