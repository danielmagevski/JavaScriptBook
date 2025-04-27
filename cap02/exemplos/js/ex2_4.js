//cria referencia ao form e aos elementos h3

const frm  = document.querySelector('form');
const resp = document.querySelector('h3');


// cria um ouvinte de evento quando o botao e clicado

frm.addEventListener('submit',(e) => {
    const quilo = Number(frm.inQuilo.value);
    const consumo = Number(frm.inConsumo.value);

    const valor = (quilo /1000 ) * consumo;
    resp.innerText = `O valor a ser pago é de R$ ${valor.toFixed(2)}`;


    e.preventDefault();
})


