const box = document.getElementsByClassName("container");
const btn = document.querySelector(".reset");
let item = document.querySelector("#item");
let span = document.getElementsByTagName("span");
let turn = "x";

const changeturn = () => {
  if (turn === "x") {
    // turn = "0";
    return "0";
  } else {
    // turn = " x";
    return "x";
  }
};

const winner = () => {
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
      // resetbtn();
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

      turn = changeturn();
      const info = document.getElementsByClassName("gameinfo");

      info[0].innerHTML = `<h2> Now Tern For ${turn} </h2>`;
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
  });
};
// btn.addEventListener("click", resetbtn());
