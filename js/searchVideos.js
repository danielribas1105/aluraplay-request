import { connectAPI } from "./connectAPI.js";
import generateCard from "./showVideos.js";

const pesquisar = document.querySelector("[data-search]");

async function buscarVideos (evento) {
    evento.preventDefault();
    const word = document.querySelector("[data-word]").value;
    const busca = await connectAPI.searchVideos(word);

    const listaPesquisada = document.querySelector("[data-list]");
    while(listaPesquisada.firstChild){
        listaPesquisada.removeChild(listaPesquisada.firstChild);
    }

    busca.forEach(element => {
        listaPesquisada.appendChild(
            generateCard(element.titulo, element.descricao, element.url, element.imagem)
        );
    });

    if(busca.length == 0) {
        listaPesquisada.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com o termo pesquisado!</h2>`
    }
}

pesquisar.addEventListener("click", evento => buscarVideos(evento));