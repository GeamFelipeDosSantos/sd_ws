const ValidacaoErro = require('../erros/ValidacaoErro');

module.exports = (app) => {
    
    const findAll = () => {
         const resultado = app.db('registro').select();
         //console.log(resultado);
         return resultado;
    };

    const save =  (registro) => {
        //console.log(registro);
        console.log("Executando save registro !!!!!!!!!!!!");
        if(!registro.descricao_problema) throw new ValidacaoErro('Descricao do problema do registro é um atributo obrigatório');
        if(!registro.cidade) throw new ValidacaoErro('Nome da cidade é um atributo obrigatório');
        if(!registro.linha) throw new ValidacaoErro('Linha é um atributo obrigatório');
        if(!registro.horario_linha) throw new ValidacaoErro('Horario da linha é um atributo obrigatório');
        if(!registro.resolvido) throw new ValidacaoErro('Resolvido é um atributo obrigatório');
        if(!registro.dt_registro) throw new ValidacaoErro('Data do registro é um atributo obrigatório');
        
        return app.db('registro').insert(registro,'*');
    };

    /*const deletar =  (registro) => {
        console.log("Deletando registro:");
        console.log(registro);
        return app.db('registro').where('id_registro', registro.id_registro).del();
        
    };*/

    const findOne =   (filter = {}) => {
        console.log(filter);
        return  app.db('registro').where(filter).first();
    };

    const find =   (filter = {}) => {
        console.log(filter);
        return  app.db('registro').where(filter);
    };

    
    return {findAll, save,find, findOne};
};