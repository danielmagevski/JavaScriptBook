const prompt = require("prompt-sync")(); // adiciona o pacote ao programa

// lê os dados de entrada
const veiculo = prompt("Veículo: ");
const preco = Number(prompt("Preço R$: "));

// calcula o valor da entrada e das parcelas
const entrada = preco * 0.50; 
const parcela = (preco * 0.50) / 12;

// exibe as respostas
console.log(`Promoção: ${veiculo}`);
console.log(`Entrada de R$: ${entrada.toFixed(2)}`);
console.log(`+12x de R$ ${parcela.toFixed(2)}`);
