const inputs = document.querySelector("#item");
const task = document.querySelector("#to-do-list");

inputs.addEventListener("keyup", function (e) {
  // e.preventDefault;
  if (e.key == "Enter") {
    // console.log(this.value);
    addlist();
    this.value = "";
  }
});

const addlist = () => {


  const list = document.createElement("li");
  list.innerHTML = `${inputs.value}
  <i class="fas fa-times"></i>`;


  list.addEventListener("click", function (e) {
    this.classList.toggle("done");
  });
  task.appendChild(list);


  list.querySelector("i").addEventListener("click" , function(){
    list.remove();
  })
};
