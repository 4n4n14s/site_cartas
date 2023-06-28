function cards(){
    var nameCard = 1;
    var cardsContainer = document.getElementById("cardsContainer")
    var cardHTML = ""
    const valores = [
        'Cavaleiro', 'Trevo', 'Navio', 'Casa', 'Árvore', 'Nuvens',
        'Cobra', 'Caixão', 'Buquê', 'Foice', 'Chicote', 'Pássaros',
        'Criança', 'Raposa', 'Urso', 'Estrelas', 'Cegonha', 'Cachorro',
        'Torre', 'Jardim', 'Montanha', 'Caminhos', 'Ratos', 'Coração',
        'Alianças', 'Livros', 'Carta', 'Cigano', 'Cigana', 'Lírios',
        'Sol', 'Lua', 'Chave', 'Peixes', 'Âncora', 'Cruz'
      ];

    for (let i = 0; i < 36; i++) {
        cardHTML += `
        <div class="card">
            <img src="cardImages/${nameCard}.jpg" alt="">
            <p>${valores[i]}</p>
        </div>`


        nameCard++;
        
        
    }
    cardsContainer.innerHTML = cardHTML
    
}
cards()

