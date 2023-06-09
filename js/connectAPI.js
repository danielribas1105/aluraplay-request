async function connectingAPI () {
    const connection = await fetch('http://localhost:3000/videos');
    const connectListVideos = await connection.json();
    return connectListVideos;
}

export const connectAPI = {
    connectingAPI
}