const gridCards = document.getElementById('grid-cards');
const campoBusca = document.getElementById('campo-busca');

function renderizarCards(listaDeAtores) {
    gridCards.innerHTML = '';

    if (listaDeAtores.length === 0) {
        gridCards.innerHTML = '<p>Nenhum ator ou atriz encontrado.</p>';
        return;
    }

    listaDeAtores.forEach(ator => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${ator.foto}" alt="Foto de${ator.nome}">
            <h3>${ator.nome}</h3>
            <p><strong>País:</strong> ${ator.pais}</p>
            <p><strong>Nascimento:</strong> ${ator.nascimento}</p>
        `;

        gridCards.appendChild(card);
    });
}

renderizarCards(atores);

campoBusca.oninput = function() {
    const textoBuscado = campoBusca.value.toLowerCase();

    const atoresFiltrados = atores.filter(ator => {
        return ator.nome.toLowerCase().includes(textoBuscado);
    });

    renderizarCards(atoresFiltrados);
};