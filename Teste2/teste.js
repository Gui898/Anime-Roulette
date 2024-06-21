const inputAnime = document.querySelector('#recive_anime');
const formulario = document.querySelector('#formulario');
const opcoes = document.querySelector('.options');
const clearBtn = document.querySelector('.clearBtn');

let listaDeAnimes = JSON.parse(localStorage.getItem('ListaDeAnimes')) || [];

function atualizarAnimes() {
    localStorage.setItem('ListaDeAnimes', JSON.stringify(listaDeAnimes));
}

formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault();
    if(inputAnime.value == ''){
        alert("Preencha o campo corretamente");
        return
    }
    const anime = {
        animeDescricao: inputAnime.value
    }
    listaDeAnimes.push(anime);
    const animeAdicionado = criarElementoAnime(anime);
    opcoes.append(animeAdicionado); 
    atualizarAnimes();
    inputAnime.value = '';
})

function criarElementoAnime(ani) {
    const li = document.createElement('li');
    li.classList.add('animeInList');
    li.textContent = ani.animeDescricao;
    
    li.addEventListener('click', () => {
        li.remove();
        removerElementoAnime(ani)
        atualizarAnimes();
    });

    return li;
}

listaDeAnimes.forEach(item => {
    const elementoAnime = criarElementoAnime(item);
    opcoes.append(elementoAnime);
})

clearBtn.addEventListener('click', () => {
    document.querySelectorAll('.animeInList').forEach(elemento => {
        elemento.remove();
    });
    localStorage.clear();
    animeSorteado.textContent = "";
    listaDeAnimes = [];
});

function removerElementoAnime(ani) {
    const index = listaDeAnimes.indexOf(ani);
    listaDeAnimes.splice(index, 1);
    atualizarAnimes();
}

