module.exports = (app) => {


const retornarDataHoraAtual = () => {
    
        const dataHora = `${retornarDataAtual()} ${retornarHoraMinutoSegundoAtual()}`
        
        return dataHora;
        
};

const retornar24HorasSeguintes = () => {
    
    const dataHora = `${retornarDataAmanha()} ${retornarHoraMinutoSegundoAtual()}`
    console.log('Hora: ',dataHora);
    return dataHora;
    
};
    
const retornarDataAtual = () => {
    
    now = new Date;
    const diaAtual = now.getDate();
    const mesAtual = retornarMesAtual();
    const anoAtual = now.getFullYear();
    const dataAtual = `${anoAtual}-${mesAtual}-${diaAtual}`;

    return dataAtual;
    
};

const retornarInicioDiaAtual = () => {
    
    now = new Date;
    const diaAtual = now.getDate();
    const mesAtual = retornarMesAtual();
    const anoAtual = now.getFullYear();
    const dataAtual = `${anoAtual}-${mesAtual}-${diaAtual} 00:00:00`;

    return dataAtual;
    
};


const retornarFimDiaAtual = () => {
    
    now = new Date;
    const diaAtual = now.getDate();
    const mesAtual = retornarMesAtual();
    const anoAtual = now.getFullYear();
    const dataAtual = `${anoAtual}-${mesAtual}-${diaAtual} 23:59:59`;

    return dataAtual;
    
};

const retornarDataOntem = () => {
    
    now = new Date;
    const diaAtual = now.getDate()-1;
    const mesAtual = retornarMesAtual();
    const anoAtual = now.getFullYear();
    const dataAtual = `${anoAtual}-${mesAtual}-${diaAtual}`;

    return dataAtual;
    
};


function diasNoMesSearch(mes, ano) {
    let data = new Date(ano, mes, 0);
    return data.getDate();
}

const retornarDataAmanha = () => {
    
    /*now = new Date;
    const diaAtual = now.getDate()+1;
    const mesAtual = retornarMesAtual();
    const anoAtual = now.getFullYear();
    const dataAtual = `${anoAtual}-${mesAtual}-${diaAtual}`;*/
    const mesAtual = retornarMesAtual();

    const amanha = new Date();
    amanha.setDate(amanha.getDate()+1);

    const diaAmanha = `${amanha.getFullYear()}-${mesAtual}-${amanha.getDate()}`;

    return diaAmanha;
    
};

const retornarHoraMinutoSegundoMilissegundoAtual = () => {
    
    //now = new Date;
    //const horaAtual = `${retornarHoraAtual()}:${retornarMinutoAtual()}:${retornarSegundoAtual()}.${now.getMilliseconds()}`;
    const horaAtual = `${retornarHoraAtual()}:${retornarMinutoAtual()}:00.000`;

    return horaAtual;
}

const retornarHoraMinutoSegundoAtual = () => {
    
    //now = new Date;
    //const horaAtual = `${retornarHoraAtual()}:${retornarMinutoAtual()}:${retornarSegundoAtual()}.${now.getMilliseconds()}`;
    const horaAtual = `${retornarHoraAtual()+1}:${retornarMinutoAtual()}:00`;
    //console.log(horaAtual);
    return horaAtual;
}


const retornarHoraAtual = () => {
    
    now = new Date;
    let horaRet = '';
    const horaAtual = now.getHours();
    

    switch(horaAtual){
    case 0:
        horaRet = '00'
    break;
    case 1:
        horaRet = '01'
    break;
    case 2:
        horaRet = '02'
        break;
    case 3:
        horaRet = '03'
        break;
    case 4:
        horaRet = '04'
        break;
    case 5:
        horaRet = '05'
        break;
    case 6:
        horaRet = '06'
        break;
    case 7:
        horaRet = '07'
        break;
    case 8:
        horaRet = '08'
        break;
    case 9:
        horaRet = '09'
        break;
    default:
        horaRet = now.getHours()-1
    } 
    
    return horaRet;
}

const retornarMinutoAtual = () => {
    
    now = new Date;
    let minutoRet = '';
    const minutoAtual = now.getMinutes();
    

    switch(minutoAtual){
    case 0:
        minutoRet = '00'
    break;
    case 1:
        minutoRet = '01'
    break;
    case 2:
        minutoRet = '02'
        break;
    case 3:
        minutoRet = '03'
        break;
    case 4:
        minutoRet = '04'
        break;
    case 5:
        minutoRet = '05'
        break;
    case 6:
        minutoRet = '06'
        break;
    case 7:
        minutoRet = '07'
        break;
    case 8:
        minutoRet = '08'
        break;
    case 9:
        minutoRet = '09'
        break;
    default:
        minutoRet = now.getMinutes()
    } 
    
    return minutoRet;
}

const retornarSegundoAtual = () => {
    
    now = new Date;
    let segundoRet = '';
    const segundoAtual = now.getSeconds();
    

    switch(segundoAtual){
    case 0:
        segundoRet = '00'
    break;
    case 1:
        segundoRet = '01'
    break;
    case 2:
        segundoRet = '02'
        break;
    case 3:
        segundoRet = '03'
        break;
    case 4:
        segundoRet = '04'
        break;
    case 5:
        segundoRet = '05'
        break;
    case 6:
        segundoRet = '06'
        break;
    case 7:
        segundoRet = '07'
        break;
    case 8:
        segundoRet = '08'
        break;
    case 9:
        segundoRet = '09'
        break;
    default:
        segundoRet = now.getSeconds()
    } 
    
    return segundoRet;
}

const retornarMesAtual = () => {
    now = new Date;
    let mesRet = '';
    const mesAtual = now.getMonth();
    

    switch(mesAtual){
    case 0:
        mesRet = '01'
    break;
    case 1:
        mesRet = '02'
    break;
    case 2:
        mesRet = '03'
        break;
    case 3:
        mesRet = '04'
        break;
    case 4:
        mesRet = '05'
        break;
    case 5:
        mesRet = '06'
        break;
    case 6:
        mesRet = '07'
        break;
    case 7:
        mesRet = '08'
        break;
    case 8:
        mesRet = '09'
        break;
    case 9:
        mesRet = '10'
        break;
    case 10:
        mesRet = '11'
        break;
    case 11:
        mesRet = '12'
        break;
    } 
    
    return mesRet;
}

   
return { retornarDataAtual,retornarDataHoraAtual , retornarDataAmanha,retornarDataOntem, retornar24HorasSeguintes, retornarInicioDiaAtual, retornarFimDiaAtual};
};