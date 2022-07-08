const argv = require ('yargs')
        
                .option('b', {
                    alias: 'base',
                    demandOption: true,
                    type:'number',
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    default: false,
                    type: 'boolean',
                    describe:' Muestra la tabla'
                })
                .option('h', {
                  alias: 'hasta',
                  default: 10,
                  type: 'number',
                  describe:'Indica el límite de la tabla de multiplicar'
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)) {
                      throw new Error("La base tiene que ser un numero")
                    } else {
                      return true // tell Yargs that the arguments passed the check
                    }
                    
                 })
                 .check((argv, options) => {
                  if (isNaN(argv.h)) {
                    throw new Error("Límite tiene que ser un numero")
                  } else {
                    return true // tell Yargs that the arguments passed the check
                  }
                  
               })
                .argv;

module.exports = argv;