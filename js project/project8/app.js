const box = document.getElementsByClassName("container");
const btn = document.querySelector(".reset");
let item = document.querySelector("#item");
let span = document.getElementsByTagName("span");
let allspan = document.querySelectorAll("span");
let start = document.querySelector("#on-btn");
const maindiv = document.querySelector(".main");
const middlediv = document.querySelector(".middle-div");
const nav = document.querySelector("nav");
const gamediv = document.querySelector(".game");
let turn = "x";
// let win = false;
const changeturn = () => {
  if (turn === "x") {
    // turn = "0";
    return "0";
  } else {
    // turn = " x";
    return "x";
  }
};
start.addEventListener("click", () => {
  console.log("gg");
  maindiv.style.position = "absolute";
  middlediv.style.opacity = "0";
  maindiv.style.opacity = "1";
  nav.style.opacity = "1";
});
const winner = () => {
  const info = document.getElementsByClassName("gameinfo");
  turn = changeturn();
  let winposib = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winposib.forEach((e) => {
    if (
      span[e[0]].innerText == span[e[1]].innerText &&
      span[e[1]].innerText == span[e[2]].innerText &&
      span[e[0]].innerText != "" &&
      span[e[2]].innerText != "" &&
      span[e[1]].innerText != ""
    ) {
      console.log("win");
      gamediv.style.display = "none";
      info[0].innerText = ` win ${turn} `;
      // return true;
      // resetbtn();
    } else {
      info[0].innerHTML = `<h2> Now Tern For ${turn} </h2>`;
    }
  });
};
// changeturn();

Array.from(box).forEach((e) => {
  e.addEventListener("click", () => {
    // console.log("hii");
    let item = e.querySelector("#item");

    if (item.innerText === "") {
      item.innerText = turn;
      winner();
    }
  });
});

const resetbtn = () => {
  Array.from(box).forEach((e) => {
    let item = e.querySelector("#item");
    // console.log("in");
    item.innerText = "";
    turn = "x";
    const info = document.getElementsByClassName("gameinfo");
    info[0].innerHTML = `<h2> Now Tern For ${turn} </h2>`;
    gamediv.style.display = "grid";
  });
};
// btn.addEventListener("click", resetbtn());
