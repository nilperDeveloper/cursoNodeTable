const fs = require('fs');

//const crearArchivo =( base =5 )=>{

// return new Promise((resolve, reject)=>{
//     let salida='';
//     //imprimir llet valor =5;a tabla de multiplicar por consola
//         for (let index = 1; index <= 10; index++){
//             salida +=(`${ base } x ${index}= ${ base * index}\n`);    
//         }
//         console.log(salida);
    
//         fs.writeFileSync(`tabla-${base}.txt`, salida);    
    
//         resolve(`Tabla-${base}.txt`);
// });
const crearArchivo = async( base =5, listar = false, hasta=10)=>{

    let salida='';
    try{
        for (let index = 1; index <= hasta; index++){
            salida +=(`${ base } x ${index}= ${ base * index}\n`);    
        }
        if(listar)
            console.log(salida.underline.yellow);            
        
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);    
    
        return `Tabla-${base}.txt`;
    }
    catch(error){
        throw error;
    }
    //imprimir llet valor =5;a tabla de multiplicar por consola
        


    
}
module.exports = {
    crearArchivo
}

