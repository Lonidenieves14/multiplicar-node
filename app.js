const colors = require('colors');
//Opcional para la taera que nos asignaron
var colors = require('colors/safe');
const argv = require('./config/yargs').argv;
argv.argv
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado : ' + `${archivo}`.green))
            //la tarea la resolvieron así
            //.then(archivo => console.log(`Archivo creado:`,colors.green(archivol)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
let argv2 = process.argv;
///console.log(argv2);
//let parametro = argv[2];
//base = parametro.split('=')[1];