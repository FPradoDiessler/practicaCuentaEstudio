import {factura} from '../src/facturas.js'


console.log("----FOR EACH----");
factura.forEach(factura=>console.log(factura));

console.log("\n----SORT MENOR A MAYOR----");
factura.sort((a,b)=>a.importe-b.importe);
console.log(factura);

console.log("\n----SORT MAYOR A MENOR----");
factura.sort((a,b)=>a.importe-b.importe);
console.log(factura);

console.log("\n----FILTER----");
const factFiltrada=factura.filter(factura => factura.importe>2000);
console.log(factFiltrada);

console.log("\n----MAP----");
const nueFact=factura.map(fact => {return{num:fact.numero, imp:fact.importe}});
console.log(nueFact);

console.log("\n----REDUCE----");
let sumaFact=factura.reduce((acumulador,fact)=>acumulador+fact.importe,0);
console.log("El total de facturas es: " + sumaFact);

console.log("\n----TEXTO----");

import fs from 'fs';
const datos=fs.readFileSync('./textos/texto.txt','utf-8');
const otrosDatos=fs.readFileSync('./textos/otroTexto.txt','utf-8')
console.log(datos);
console.log("\n----AGREGO TEXTO----");

fs.appendFileSync('./textos/texto.txt',otrosDatos);
console.log(datos);

const diAlgo = (texto) => console.log(texto);
setTimeout(()=> {
    diAlgo("Pasaron 3 segundos");
    console.log("termine");
},3000);