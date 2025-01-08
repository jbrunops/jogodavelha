const tabuleiro = document.getElementById("tabuleiro");

for (let i = 0; i < 9; i++) {
  const celula = document.createElement("div");
  celula.classList.add("celula");
  tabuleiro.appendChild(celula);
}
