const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const moviebox = document.querySelector("#movie-box")
const search =document.querySelector("#search")




const getmovie = async (api) => {
  const response = await fetch(api);
  const data = await response.json();
  console.log(data);
  showmovie(data.results);
};



const showmovie = (data) => {
    moviebox.innerHTML=""
  data.forEach((item) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
            <img src="${IMGPATH + item.poster_path}" alt="" />
                <div class="overlay">
                <div class="title">
                <h2>title: ${item.original_title}</h2>
                <span>${item.vote_average}</span>
                </div>
                    <h2>Overview:</h2>
                    <p>
                    ${item.overview}
                    </p>
                </div>
           `;
           moviebox.appendChild(box)
  });
};

search.addEventListener(
    "keyup",
    function(e){
         if(e.target.value != ""){
            getmovie(SEARCHAPI+e.target.value)
         }else{
            getmovie(APIURL);
         }
        console.log(e.target.value)
    }
)

getmovie(APIURL);