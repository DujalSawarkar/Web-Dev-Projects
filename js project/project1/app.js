const enddate = "6 June 2023 12:00 AM ";

document.getElementById("end-date").innerText = enddate;

const input = document.querySelectorAll("input");

function clock() {
  const end = new Date(enddate);
  const now = new Date();
  const diff = end - now;
  if(diff<0)return;
  const days =Math.floor( diff / 60 / 60 / 24 / 1000 );
  input[0].value=days;
  const hours =Math.floor( diff / 60 / 60 / 1000 ) % 24;
  input[1].value=hours;
  const min =Math.floor( diff / 60 / 1000 ) % 60;
  input[2].value=min;
  const sec =Math.floor( diff / 1000 ) % 60;
  input[3].value=sec;

}
setInterval(
    ()=>{
        clock();
    }
)
// clock();
