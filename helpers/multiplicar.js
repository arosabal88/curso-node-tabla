
const fs= require('fs');
const { argv } = require('process');
const colors = require('colors');
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });


const crearArchivo = async( base=5,limite=10,listar) => {

    try {
        let salida= '';
        for(let i=1; i<=limite;i++){
        salida += (`${base} X ${i} = ${base*i} \n`);
        }
        if(listar){
            console.log('============================'.info);
            console.log ('Tabla del', base)
            console.log('============================'.info);
            console.log (salida);
        }
            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
            return (`tabla del ${base} límite ${limite}.txt`);
        
    } catch (error) {
        throw(error);
    }
 
}


module.exports ={
    crearArchivo
}
