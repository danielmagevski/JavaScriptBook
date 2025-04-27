// Cria referência ao formulário e ao elemento de resposta
const frm = document.querySelector("form");
const resp = document.querySelector("#outResp1");

// Cria um ouvinte de evento para quando o botão é clicado
frm.addEventListener("submit", (e) => {
  // Lê os valores dos campos do formulário
  const veiculo = frm.inVeiculo.value;
  const preco = Number(frm.inPreco.value);

  // Calcula o preço da promoção (2 unidades com desconto de 1 centavo)
  const desconto = 0.01; // 1 centavo de desconto
  const precoTotal = 2 * preco; // Preço total de 2 unidades
  const precoComDesconto = precoTotal - desconto;

  // Atualiza o elemento de resposta com o resultado
  resp.innerText = `Promoção de ${veiculo}: Leve 2 por apenas R$ ${precoComDesconto.toFixed(
    2
  )}`;

  // Evita o envio do formulário
  e.preventDefault();
});
