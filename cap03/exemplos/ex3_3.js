const prompt = require("prompt-sync")(); // adiciona o pacote ao programa

// lê os dados de entrada
const salario = Number(prompt("Salário R$: "));
const tempo = Number(prompt("Tempo (anos): "));

// calcula os quinquênios e o acréscimo
const quadrenios = Math.floor(tempo / 4); // calcula os quadriênios
const acrescimo = (salario * quadrenios) / 100; // calcula o acréscimo

// exibe as respostas
console.log(`Quadriênios: ${quadrenios}`);
console.log(`Salário Final R$: ${(salario + acrescimo).toFixed(2)}`);
