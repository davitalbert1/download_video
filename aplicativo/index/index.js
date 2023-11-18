function donwload(vid){
    
    var div = "<div class='video'></div>";
    document.getElementById("demo").innerHTML = div;
}

function buscar() {
    // Obtenha a chave de API do Google Developers Console
    const apiKey = 'SUA_CHAVE_DE_API';

    // Obtenha o valor de pesquisa do campo de entrada
    const query = document.getElementById('searchInput').value;

    // Construa a URL da API
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=${apiKey}`;

    // Faça uma solicitação AJAX para a API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => mostrar(data.items))
        .catch(error => console.error('Erro ao buscar vídeos:', error));
}

function mostrar(videos) {
    // Limpe os resultados anteriores
    document.getElementById('results').innerHTML = '';

    // Exiba os novos resultados
    videos.forEach(video => {
        const title = video.snippet.title;
        const thumbnailUrl = video.snippet.thumbnails.default.url;

        array.forEach(element => {
            const videoDiv = document.createElement('div');
            videoDiv.innerHTML = `<h2>${title}</h2>
            <img src="${thumbnailUrl}" alt="${title}">`;
        });

        document.getElementById('results').appendChild(videoDiv);
    });
}