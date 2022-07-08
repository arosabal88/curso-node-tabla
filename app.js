const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
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


console.clear();
console.log( argv);


crearArchivo(argv.b,argv.h,argv.l)
.then(nombreArchivo => {
    console.log(`Se creó el archivo ${nombreArchivo} `.info );
})
.catch(err => console.log(err).error);
// console.log( process.argv );



