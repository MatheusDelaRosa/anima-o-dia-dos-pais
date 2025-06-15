const totalElementos = 15;
const icones = [
  "https://cdn-icons-png.flaticon.com/512/744/744465.png",
  "https://cdn-icons-png.flaticon.com/512/2354/2354571.png",
  "https://cdn-icons-png.flaticon.com/512/2274/2274640.png"
];

function criarElementoFlutuante() {
  const animacaoDiv = document.querySelector('.animacao');
  const img = document.createElement('img');
  img.src = icones[Math.floor(Math.random() * icones.length)];
  img.classList.add('flutuante');

  img.style.left = `${Math.random() * 100}%`;
  img.style.animationDuration = `${8 + Math.random() * 4}s`;
  img.style.animationDelay = `${Math.random() * 5}s`;
  img.style.width = `${40 + Math.random() * 40}px`;

  animacaoDiv.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 15000);
}

for (let i = 0; i < totalElementos; i++) {
  criarElementoFlutuante();
}

setInterval(criarElementoFlutuante, 3000);