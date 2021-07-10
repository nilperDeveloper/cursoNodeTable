
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors= require('colors');

console.clear();

//console.log('base: yargs', argv.base);

//let valor = 8;
// let salida='';
// //imprimir llet valor =5;a tabla de multiplicar por consola
// for (let index = 1; index <= 10; index++){
//     salida +=(`${ valor } x ${index}= ${ valor * index}\n`);    
// }
// console.log(salida);

// fs.writeFileSync(`tabla-${valor}.txt`, salida);    

// console.log(`Tabla-${valor} creada`);

// const [ , , arg3 = 'valor=5'] = process.argv;
// const [ , valor ] = arg3.split('=');

//console.log( valor );
crearArchivo( argv.b, argv.l, argv.h )
    .then(nombreArchivo=>console.log(nombreArchivo,'creado'.rainbow))
    .catch(err=>{console.log(err.green)});



