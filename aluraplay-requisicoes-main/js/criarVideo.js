import { conectaAPI } from "./conectaApi";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento){
    evento.preventDeFault();
    const imagem = document.querySelector("[data-formulario]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    await conectaAPI.criaVideo(titulo, descricao, url, imagem);
    window.location.href = "../pages/envio-concluido.html";
}

formulario.addEventListener("submit", evento => criarVideo(evento));