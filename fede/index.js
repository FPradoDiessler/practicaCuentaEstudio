console.log("ESTO ES UNA FACTURA ");

import {factura} from './src/facturas.js'

console.log("esto es un forEach");

factura.forEach(facturaActual => console.log(facturaActual))

console.log("******SORT DE MENOR A MAYOR*******");

factura.sort((a,g) => a.importe - g.importe)

console.log(factura)


console.log("******SORT DE MAYOR A MENOR*******");

factura.sort((g,a) => a.importe - g.importe)

console.log(factura)

console.log("******FILTER*******");

const filter = factura.filter(elemento => elemento.importe > 2000)

console.log(filter)


console.log("****** MAP *******");

const map = factura.map(elemento =>{return {num: elemento.numero, imp: elemento.importe} } )

console.log(map)

console.log("****** REDUCE *******");

let reduce = factura.reduce((sumatotal, actual) => sumatotal + actual.importe, 0)

console.log("el total de las facturas es de: " + reduce);



console.log("******* TRABAJO TEXTO *******")

import fs from 'fs';

let datos = fs.readFileSync('./texto/texto.txt', 'utf-8')

console.log(datos);



fs.appendFileSync('./texto/texto.txt','HOLA SABRINA TA VAMOS A MATAR TUS HIJOS' )

console.log(datos);

const diAlgo = (texto) => console.log(texto);

setTimeout(()=> {
    diAlgo("Pasaron 3 segundos");
    console.log("Terminado");
},3000);
