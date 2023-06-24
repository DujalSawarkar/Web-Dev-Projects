const giturl = "https://api.github.com/users/";


const input = document.querySelector("#search")



const geturl = async (username) => {
  const Response = await fetch(giturl+username);
  const data = await Response.json();
  console.log(data);
  showdata(data);
};
// geturl("DujalSawarkar");

const showdata = (item) =>{
  const maindiv = document.querySelector("#main")
  const boxdiv = document.createElement("div")
  boxdiv.classList.add("box")
  maindiv.appendChild(boxdiv)
  console.log("done")

}

input.addEventListener(
  "focusout",
  function(){
    geturl(input.value)
  }
)