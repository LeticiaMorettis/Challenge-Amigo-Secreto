let amigos = [];


function adicionarAmigo() {
    const campoNomeDoAmigo = document.getElementById('amigo');
    const nome = campoNomeDoAmigo.value.trim();

    if (nome == "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    atualizarListaAmigos();
    campoNomeDoAmigo.value = "";
}


function atualizarListaAmigos() {
    const listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        listaDeAmigos.innerHTML += `<li>${i + 1}. ${amigos[i]}</li>`;
    }
}


function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        resultado.innerHTML = "A lista de amigos está vazia. Adicione nomes antes de sortear.";
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `O nome sorteado é: <strong>${amigoSorteado}</strong>`;

    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    amigos = [];
}
