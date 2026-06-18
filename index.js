window.addEventListener("load", function () {
    const nome = localStorage.getItem("nomeUsuario");

    if (nome) {
        document.getElementById("nome").innerText =  nome ;
    } else {
        document.getElementById("nome").innerText = "";
    }
});



const botoesFiltro = document.querySelectorAll('.btn-filtro');
const todosOsCards = document.querySelectorAll('.meu-card');

botoesFiltro.forEach(botao => {
    botao.addEventListener('click', (event) => {
        event.preventDefault();

        const filtroSelecionado = botao.getAttribute('data-filtro');

        todosOsCards.forEach(card => {
            const categoriaCard = card.getAttribute('data-categoria');

            if (filtroSelecionado === 'todos' || filtroSelecionado === categoriaCard) {
                card.classList.remove('card-escondido');
            } else {
                card.classList.add('card-escondido');
            }
        });
    });
});



const cards = document.getElementById("cards");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

next.addEventListener("click", () => {
    const firstCard = cards.querySelector(".meu-card");
    cards.appendChild(firstCard);
});

prev.addEventListener("click", () => {
    const allCards = cards.querySelectorAll(".meu-card");
    const lastCard = allCards[allCards.length - 1];
    cards.prepend(lastCard);
});




const linha2 = document.getElementById("cards2");
const next2 = document.getElementById("next2");
const prev2 = document.getElementById("prev2");

prev2.addEventListener("click", () => {
    const primeiroCard = linha2.querySelector(".meu-card");
    linha2.appendChild(primeiroCard);
});

next2.addEventListener("click", () => {
    const cards = linha2.querySelectorAll(".meu-card");
    const ultimoCard = cards[cards.length - 1];
    linha2.prepend(ultimoCard);
});



let quantidade = 0;

const contador = document.getElementById("contador-carrinho");
const botoes = document.querySelectorAll("#btn-carrinho");
const botaoRemover = document.getElementById("btn-remover-carrinho")

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        quantidade++;
        contador.textContent = quantidade;
    });
});

botaoRemover.addEventListener("click", () => {
    if (quantidade > 0) {
        quantidade--;
        contador.textContent = quantidade;
    }
});





const cardsModal = document.querySelectorAll(".card.meu-card");
const overlays = document.querySelectorAll(".overlay");

cardsModal.forEach((card, index) => {
    card.addEventListener("click", (e) => {

        if (e.target.closest(".acessar")) {
            return;
        }

        overlays[index].classList.add("ativo");
    });
});

document.querySelectorAll(".fechar").forEach(botao => {
    botao.addEventListener("click", (e) => {
        e.stopPropagation();
        botao.closest(".overlay").classList.remove("ativo");
    });
});

overlays.forEach(overlay => {
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.classList.remove("ativo");
        }
    });
});


const botaoAtivar = document.querySelector('#btn-hamburger')

if (botaoAtivar) {
    const iconeBotao = document.querySelector('#btn-hamburger i')
    const menuResponsivo = document.querySelector('.dropdown-menu')

    botaoAtivar.onclick = function(){
        if(menuResponsivo.classList.contains('open')){
            menuResponsivo.classList.remove('open')
            iconeBotao.classList = "fa-solid fa-bars"
        } else {
            menuResponsivo.classList.add('open')
            iconeBotao.classList = "fa-solid fa-xmark"
        }
    }
}