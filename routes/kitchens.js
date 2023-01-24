module.exports = app => {
    const kitchens = require('../controllers/kitchens');
    const upload = require("../middleware/upload");

    var router = require('express').Router();

    router.post("/", upload.single("file"), kitchens.create);
    // router.post("/", upload.single( 'file' ), ( req, res, next ) => {
    //     res.send( req.body ); 
    // });
  
    router.get("/", kitchens.findAll);
  
    router.get("/:id", kitchens.findOne);
  
    router.put("/:id", upload.single("file"),  kitchens.update);
  
    router.delete("/:id", kitchens.delete);
  
    app.use('/api/kitchens', router);
}