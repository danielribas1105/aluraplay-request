
async function connectingAPI () {
    const connection = await fetch("http://localhost:3000/videos");
    const connectListVideos = await connection.json();
    return connectListVideos;
}

async function createVideo (titulo, descricao, url, imagem) {
    const connection = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify ({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if(!connection.ok) {
        throw new Error("Não foi possível enviar o vídeo!");
    }
    const connectVideos = await connection.json();
    return connectVideos;
}

async function searchVideos (word) {
    const connection = await fetch(`http://localhost:3000/videos?q=${word}`);

    const connectSearchVideos = await connection.json();
    return connectSearchVideos;
}

export const connectAPI = {
    connectingAPI,
    createVideo,
    searchVideos
}