/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let number = document.querySelector("#number");
  let random = getRandom(11);
  let symbol = getSymbol(getRandom(4));
  let top = document.querySelector(".top");
  let bottom = document.querySelector(".bottom");
  if (symbol === "\u2660" || symbol === "\u2663") {
    top.style.color = "black";
    bottom.style.color = "black";
  }
  number.innerHTML = random;
  top.innerHTML = symbol;
  bottom.innerHTML = symbol;
};
function getRandom(max) {
  return Math.floor(Math.random() * (max - 1) + 1);
}
function getSymbol(option) {
  switch (option) {
    case 1:
      let spades = "\u2660";
      return spades;
      break;
    case 2:
      let trebols = "\u2663";
      return trebols;
      break;
    case 3:
      let hearts = "\u2665";
      return hearts;
      break;

    default:
      hearts = "\u2665";
      return hearts;
      break;
  }
}
