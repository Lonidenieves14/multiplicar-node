//requires
const fs = require('fs');
const colors = require('colors');
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor intoducido ${base} no es un número`);
            return;
        }

        let data = ''

        for (var i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });
}

let listarTabla = (base, limite) => {
    console.log('======================================='.rainbow);
    console.log(`============Tabla de ${base}===========`.green);
    console.log('======================================='.rainbow);
    for (var i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i} \n`);
    }

}

module.exports = {
    crearArchivo,
    listarTabla

};