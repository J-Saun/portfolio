// active class for nav links
const linkList = document.querySelectorAll("nav ul li");
// console.log(linkList);
for (let i = 0; i < linkList.length; i++) {
  //   console.log(linkList[i].classList);
}
// random color function
const genRandColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};
// document.body.style.backgroundColor = genRandColor();

// score keeper practice

// const p1 = {
//   score: 0,
//   button: document.querySelector("#p1Btn"),
//   display: document.querySelector("#p1Display"),
// };
// const p2 = {
//   score: 0,
//   button: document.querySelector("#p2Btn"),
//   display: document.querySelector("#p2Display"),
// };

// const resetBtn = document.querySelector("#reset");
// const winningScoreSelect = document.querySelector("#playTo");

// let winningScore = 3;
// let isGameOver = false;

// function gameOver() {
//   isGameOver = true;
//   p1.button.disabled = true;
//   p2.button.disabled = true;
// }

// function updateScore(player) {
//   if (!isGameOver) {
//     player.score += 1;
//     if (player.score === winningScore) {
//       gameOver();
//     }
//     player.display.textContent = player.score;
//   }
// }
// p1.button.addEventListener("click", () => {
//   updateScore(p1);
// });

// p2.button.addEventListener("click", () => {
//   updateScore(p2);
// });

// function reset() {
//   isGameOver = false;
//   for (let p of [p1, p2]) {
//     p.score = 0;
//     p.display.textContent = p.score;
//     p.button.disabled = false;
//   }
// }

// resetBtn.addEventListener("click", reset);

// winningScoreSelect.addEventListener("change", function () {
//   winningScore = parseInt(this.value);
//   reset();
// });

//Work here

const multiply = (a, b) => a * b;
console.log(multiply(3, 3));

const square = (x) => multiply(x, x);
console.log(square(3));

const num = 100;

const isRightAngle = (a, b, c) => {
  if (square(a) + square(b) === square(c)) {
    console.log(true);
  } else console.log(false);
};
isRightAngle(3, 4, 5);
