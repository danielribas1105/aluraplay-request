import { connectAPI } from "./connectAPI.js";

const formulario = document.querySelector("[data-form]");

async function insertVideo (evento) {
    evento.preventDefault();
    const url = document.querySelector("[data-url]").value;
    const image = document.querySelector("[data-image]").value;
    const title = document.querySelector("[data-title]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    try {
        await connectAPI.createVideo(title, descricao, url, image);
        window.location.href = "../pages/envio-concluido.html";
    } catch(e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento => insertVideo(evento));