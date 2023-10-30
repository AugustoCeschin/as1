// Função para carregar e inserir o conteúdo do header.html no corpo da página
function carregarHeader() {
    fetch("header.html")
        .then(retorno => retorno.text())
        .then(conteudoHeader => {
            const headerElement = document.createElement("header");
            headerElement.innerHTML = conteudoHeader;
            document.body.appendChild(headerElement)
        })
        .catch(error => {
            console.error("Erro ao carregar o conteúdo do header: " + error);
        });
}

// Chama a função para carregar o conteúdo do header
carregarHeader();