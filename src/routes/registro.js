const  express = require('express');

module.exports = (app) => {

    const router = express.Router();

    router.get('/',   (req,res,next) => {
         app.services.registro.findAll()
        .then(result => {
            res.status(200).json(result);
        }).catch(erro => next(erro));
        
    });
    
    router.get('/:filtro',   (req,res,next) => {
        app.services.registro.find({linha:req.params.filtro})
       .then(result => {
           res.status(200).json(result);
       }).catch(erro => next(erro));
       
   });
    
    router.post('/', async (req,res,next) => {
        try{
            const result = await app.services.registro.save(req.body)
            console.log(req.body);
            return res.status(201).json(result[0]);
            
        }catch(erro){
            next(erro);
        }
        
    });
    
    return router;
};
