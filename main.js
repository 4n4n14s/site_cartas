const inputPergunta = document.getElementById("myQuestion");
const buttonPergunta = document.getElementById("myButton");
const jogoCards = document.getElementById("jogoCards");
const addButtton = document.getElementById("addButton")
let jogoCardsHtml = "";

const valores = [
  'Cavaleiro', 'Trevo', 'Navio', 'Casa', 'Árvore', 'Nuvens',
  'Cobra', 'Caixão', 'Buquê', 'Foice', 'Chicote', 'Pássaros',
  'Criança', 'Raposa', 'Urso', 'Estrelas', 'Cegonha', 'Cachorro',
  'Torre', 'Jardim', 'Montanha', 'Caminhos', 'Ratos', 'Coração',
  'Alianças', 'Livros', 'Carta', 'Cigano', 'Cigana', 'Lírios',
  'Sol', 'Lua', 'Chave', 'Peixes', 'Âncora', 'Cruz'
];

const cards = [];

for (let i = 0; i < valores.length; i++) {
  cards.push({ valor: valores[i], index: i });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

function criaCardsHtml() {
  const cartasEmbaralhadas = shuffleArray(cards);
  jogoCardsHtml = ""; // Limpar a string antes de preencher novamente

  for (let i = 0; i < cartasEmbaralhadas.length; i++) {
    jogoCardsHtml += `
    
    <li class="card" onclick="setSevenCard('${cartasEmbaralhadas[i].valor}')">
        <img src="assets/_2d782896-a38e-4f76-ab02-772ca186aba6-PhotoRoom.png-PhotoRoom.png" alt="">
      </li>`;
    

    /*jogoCardsHtml += `
      <div class="card">
        <img src="cardImages/${cartasEmbaralhadas[i].index + 1}.jpg" alt="">
        <p>${cartasEmbaralhadas[i].valor}</p>
      </div>`;*/
  }

  jogoCards.innerHTML = jogoCardsHtml;
  buttonPergunta.remove()

}

function createNewButon(){
    const newButton = document.createElement("button")
    newButton.textContent = "nova pergunta"
    newButton.addEventListener("click", criaCardsHtml)
    addButtton.appendChild(newButton)
}

function setSevenCard(card){
    var cardEscolhido = []

    if(cardEscolhido.length<7){
        cardEscolhido.push(card)
        const index = cartasEmbaralhadas.findIndex(item=>item.valor===card.valor )

        if(index!==-1){
            cartasEmbaralhadas.splice(index, 1)
        }

    }

    console.log(cardEscolhido)


    

}

buttonPergunta.addEventListener("click", ()=>{
    criaCardsHtml()
    createNewButon()
} );
