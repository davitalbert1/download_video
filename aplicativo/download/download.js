        // Função para obter vídeos do back-end
        async function video() {
            try {
                const response = await fetch('video.cs'); // Substitua pelo caminho correto do seu arquivo PHP
                const videos = await response.json();

                // Manipule os dados como quiser, aqui estou apenas imprimindo no console
                console.log(videos);

                // Exemplo de como você pode mostrar os vídeos em uma div
                const videosContainer = document.getElementById('videos-container');
                videos.forEach(video => {
                    const videoElement = document.createElement('div');
                    videoElement.innerHTML = `<h3>${video.titulo}</h3><p>${video.descricao}</p>`;
                    videosContainer.appendChild(videoElement);
                });

            } catch (error) {
                console.error('Erro ao obter vídeos:', error);
            }
        }