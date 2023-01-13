module.exports = app => {
    const cashiers = require('../controllers/cashiers');
    const upload = require("../middleware/upload");

    var router = require('express').Router();

    router.post("/", upload.single("file"), cashiers.create);
    // router.post("/", upload.single( 'file' ), ( req, res, next ) => {
    //     res.send( req.body ); 
    // });
  
    router.get("/", cashiers.findAll);
  
    router.get("/:id", cashiers.findOne);
  
    router.put("/:id", upload.single("file"),  cashiers.update);
  
    router.delete("/:id", cashiers.delete);
  
    app.use('/api/cashiers', router);
}