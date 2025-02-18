let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nome);
    inputAmigo.value = '';
    
    const listaAmigos = document.getElementById('listaAmigos');
    const novoAmigo = document.createElement('li');
    novoAmigo.textContent = nome;
    listaAmigos.appendChild(novoAmigo);
}
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        const novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigos[i];
        lista.appendChild(novoAmigo);
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione amigos antes de sortear!');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    const elementoSorteado = document.createElement('li');
    elementoSorteado.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(elementoSorteado);
}