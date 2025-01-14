const tabuleiro = document.getElementById("tabuleiro");

for (let i = 0; i < 9; i++) {
  const celula = document.createElement("div");
  celula.classList.add("celula");
  tabuleiro.appendChild(celula);
}

let jogadorAtual = "x";
const celulas = document.querySelectorAll("#tabuleiro div");

celulas.forEach((celula) => {
  celula.addEventListener("click", () => {
    if (celula.textContent === "") {
      celula.textContent = jogadorAtual;
      jogadorAtual = jogadorAtual === "x" ? "o" : "x";
    }
  });
});

function verificarVitoria() {
  const combinacoesVencedoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combinacao of combinacoesVencedoras) {
    const [a, b, c] = combinacao;

    if (
      celulas[a].textContent !== "" &&
      celulas[a].textContent === celulas[b].textContent &&
      celulas[a].textContent === celulas[c].textContent
    ) {
      return celulas[a].textContent;
    }
  }
}

celulas.forEach((celula) => {
  celula.addEventListener("click", () => {
    if (celula.textContent === "") {
      celula.textContent = jogadorAtual;
      const vencedor = verificarVitoria();

      if (vencedor) {
        alert(`O jogador ${vencedor} venceu!`);
        atualizarPlacar(vencedor);
        reiniciarJogo();
      } else if ([...celulas].every((celula) => celula.textContent !== "")) {
        alert("Empate!");
        reiniciarJogo();
      } else {
        // Alternar para o próximo jogador
        jogadorAtual = jogadorAtual === "X" ? "O" : "X";
      }
    }
  });
});

const placarX = document.getElementById("placar-x");
const placarO = document.getElementById("placar-o");

function atualizarPlacar(vencedor) {
  if (vencedor === "X") {
    placarX.textContent = parseInt(placarX.textContent) + 1;
  } else if (vencedor === "O") {
    placarO.textContent = parseInt(placarO.textContent) + 1;
  }
}

function reiniciarJogo() {
  celulas.forEach((celula) => (celula.textContent = "")); // Limpa todas as células
  jogadorAtual = "X"; // Reseta para o jogador X
}
