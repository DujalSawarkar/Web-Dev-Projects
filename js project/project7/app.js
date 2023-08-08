const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weatherinfo");
// const API = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`
const input = document.querySelector("input");

const getdata = async (city) => {
  const Response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = await Response.json();
  console.log(data);
  weather.innerHTML = "";
  //for img
  // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  const imgdiv = document.createElement("div");
  imgdiv.classList.add("image");
  imgdiv.innerHTML = `<img src="https:openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" />
`;
  weather.appendChild(imgdiv);
  //info
  const infodiv = document.createElement("div");
  infodiv.classList.add("info");
  infodiv.innerHTML = `
          <h1>${ data.main.temp} °C</h1>

          <h2>${data.name}</h2>
          <p>
           ${data.weather[0].description}
          </p>
  `;
  weather.appendChild(infodiv);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getdata(input.value);
  // console.log(input.value);
});
