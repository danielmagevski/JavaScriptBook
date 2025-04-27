const prompt = require("prompt-sync")(); // adiciona o pacote ao programa

// lê os dados de entrada
const pesoKg = Number(prompt("Peso da Ração (kg): "));
const consumo = Number(prompt("Consumo Diário (gr): "));

// cria variável auxiliar pesoGr
const pesoGr = pesoKg * 1000;

// calcula as respostas
const duracao = Math.floor(pesoGr / consumo); // duração em dias
const sobra = pesoGr % consumo; // sobra em gramas

// exibe os dados de saída
console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra} gr`);
