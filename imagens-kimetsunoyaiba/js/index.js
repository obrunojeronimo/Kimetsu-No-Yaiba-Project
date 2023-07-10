const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: "smooth"});
        }

        removeCharacterSelection();

        personagem.classList.add('selecionado');
        
        changeSelectedCharacterImage(personagem);

        changeSelectedCharacterName(personagem);

        changeCharacterDescription(personagem);
    })
})

function changeCharacterDescription(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function changeSelectedCharacterName(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function changeSelectedCharacterImage(personagem) {
    const imagempersonagemGrande = document.querySelector('.personagem-grande');

    const idPersonagem = personagem.attributes.id.value;

    imagempersonagemGrande.src = `./imagens-kimetsunoyaiba/pngs/${idPersonagem}_png.png`;
}

function removeCharacterSelection() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
