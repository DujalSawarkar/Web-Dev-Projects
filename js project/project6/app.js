const giturl = "https://api.github.com/users/";

const input = document.querySelector("#search");

const geturl = async (username) => {
  const Response = await fetch(giturl + username);
  const data = await Response.json();
  console.log(data);
  showdata(data);
};
// geturl("DujalSawarkar");

const showdata = (item) => {
  const maindiv = document.querySelector("#main");
  const boxdiv = document.createElement("div");
  boxdiv.classList.add("box");
  boxdiv.innerHTML = ` 
  <div>
  <img src="${item.avatar_url}" alt="" id="pic" />
</div>
<div class="content">
  <h2>${item.name}</h2>
  <p>${item.bio}</p>
  <ul>
            <li>followers</li>
            <li>following</li>
            <li>repo</li>
          </ul>
  <ul>
    <li>${item.followers}</li>
    <li>${item.following}</li>
    <li>${item.public_repos}</li>
  </ul> `;
 
  maindiv.appendChild(boxdiv);
  console.log("done");
};

input.addEventListener("focusout", function () {
  geturl(input.value);
});
