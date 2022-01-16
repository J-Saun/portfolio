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

//Work here
