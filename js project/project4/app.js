const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const numberset ="1234567890";
const symbolset ="!@#$%^&*-";

const totalchar = document.getElementById("total-char")
const upperinput = document.getElementById("UpperCase");
const lowerinput = document.getElementById("LowerCase");
const numberinput = document.getElementById("number");
const symbolinput = document.getElementById("Symbol");
const passbox = document.getElementById("pass-box")
const button = document.querySelector(".btn");

const getrandomdata = (dataset) => {
    return dataset[Math.floor( Math.random() * dataset.length)];
}

const getpass = (password = "") => {
if(upperinput.checked){
    password += getrandomdata(upperset);
}

if(lowerinput.checked){
    password += getrandomdata(lowerset);
}

if(numberinput.checked){
    password += getrandomdata(numberset);
}

if(symbolinput.checked){
    password += getrandomdata(symbolset);
}

if(password.length < totalchar.value){
    return getpass(password);
}
const resultpass = password.slice(0,totalchar.value);
passbox.innerText = resultpass;
console.log(resultpass)
}

button.addEventListener("click", function(){
getpass();
})

