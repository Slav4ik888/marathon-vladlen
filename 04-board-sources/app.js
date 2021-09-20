const boards = document.querySelectorAll(`#board`);
console.log('boards: ', boards);
const colors = [`pink`, `green`, `gyan`, `#e74c3c`, `#8e44ad`, `#3498db`, `#e67e22`, `#2ecc71`];

const SQUARES_NUMBER = 50;


for (let idx = 0; idx < boards.length; idx++) {
  console.log('idx: ', idx);

  for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement(`div`);
    square.classList.add(`square`);

    square.addEventListener(`mouseover`, setColor);
    square.addEventListener(`mouseleave`, removeColor);

    boards[idx].append(square);
  }
}



function setColor(e) {
  const el = e.target;
  const color = getRandomColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(e) {
  const el = e.target;
  el.style.backgroundColor = `#1d1d1d`;
  el.style.boxShadow = `0 0 2px #000`;
}


const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];