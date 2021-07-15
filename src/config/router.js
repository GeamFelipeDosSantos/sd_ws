const  express = require('express');

module.exports = (app) => {

    
    const protectedRouter = express.Router();

    protectedRouter.use('/registro',app.routes.registro);
    
        
    app.use('/v1/registro', app.routes.registro, protectedRouter); 
    //app.use('/v1', app.config.passport.authenticate(), protectedRouter);
       
    
   
};