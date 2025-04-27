//cria referencia ao form e aos elementos h3 e h4

const frm  = document.querySelector('form');
const resp = document.querySelector('h3');
const resp2 = document.querySelector('h4');

// cria um ouvinte de evento quando o botao e clicado

frm.addEventListener('submit',(e) => {
    const titulo = frm.inTitulo.value;
    const duracao = Number(frm.inDuracao.value);
    const horas  = Math.floor(duracao/60);
    const minutos = duracao % 60;
    resp.innerText = `Titulo: ${titulo}`;
    resp2.innerText = `Duração: ${horas} horas e ${minutos} minutos`;
    e.preventDefault();
})


