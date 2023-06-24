const giturl = "https://api.github.com/users/";


const input = document.querySelector("#search")
const pic = document.getElementById("pic")


const geturl = async (username) => {
  const Response = await fetch(giturl+username);
  const data = await Response.json();
  console.log(data);

};
// geturl("DujalSawarkar");

input.addEventListener(
  "keyup",
  function(){
    geturl(input.value)
  }
)