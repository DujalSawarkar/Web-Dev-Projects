const box = document.getElementsByClassName("container");

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

// changeturn();

Array.from(box).forEach((e) => {
  let item = e.querySelector("#item");
  e.addEventListener("click", () => {
    // console.log("hii");
    if (item.innerText === "") {
      item.innerText = turn;
      turn = changeturn();
      const info = document.getElementsByClassName("gameinfo");
      info[0].innerHTML = `<h2> Now Tern For ${turn} </h2>`
    }
  });
});
