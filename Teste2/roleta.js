const getAnimeBtn = document.querySelector('#drawBt');
const animeSorteado = document.querySelector('.animeSorteado');

function sortearAnime(array) {
    let drawedNum = parseInt(Math.random() * array.length);
    return drawedNum;
}

function conferir(num, array) {
    const paragrafo = document.createElement('p');
    const elementoDoSorteio = JSON.stringify(array[num].animeDescricao);
    animeSorteado.textContent = elementoDoSorteio;
}

getAnimeBtn.addEventListener('click', () => conferir(sortearAnime(listaDeAnimes), listaDeAnimes));