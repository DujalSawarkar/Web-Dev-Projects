const question = [
  {
    que: "which of the following is famous language ?",
    a: "HTML",
    b: "CSS",
    c: "js",
    d: "php",
    correct: "a",
  },
  {
    que: "which of the following is markup language",
    a: "py",
    b: "Cpp",
    c: "java",
    d: "php",
    correct: "b",
  },
  {
    que: "which of the following is gaming language",
    a: "cotelin",
    b: "c#",
    c: "js",
    d: "php",
    correct: "c",
  },
];

let index = 0;
const quebox = document.querySelector("#quebox");
const option = document.querySelectorAll(".Option");
let total = question.length;
let right = 0,
  wrong = 0;

//data inserting function
const loadq = () => {
  const data = question[index];
  if (index == total) {
    return endquiz();
  }
  reset();
  quebox.innerText = `${data.que}`;
  option[0].nextElementSibling.innerText = data.a;
  option[1].nextElementSibling.innerText = data.b;
  option[2].nextElementSibling.innerText = data.c;
  option[3].nextElementSibling.innerText = data.d;
};

//reset function
const reset = () => {
  option.forEach((input) => {
    input.checked = false;
  });
};

//checking the value
const submit = document.querySelector(".btn");
const submitans = () => {
  const data = question[index];
  const ans = getans();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadq();
  return;
};

// get submit value function
let getans = () => {
    let answer;
  option.forEach((input) => {
    if (input.checked) {
      answer= input.value;
      //   console.log("yes")
    }
  })
  return answer;
};

const endquiz = () => {
  // console.log("end")
  document.getElementById("box").innerHTML = `
    <h3>thank you for playing quiz</h3>
    <h2>${right} / ${total} is correct </h2> 
    `;
};

loadq();
