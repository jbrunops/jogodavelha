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
