const question =[{
    'que':'which of the following is markup language ?',
    'a':'HTML',
    'b':'CSS',
    'c':'js',
    'd':'php',
    'correct':'a'
},
{
    'que':'which of the following is markup language',
    'a':'py',
    'b':'Cpp',
    'c':'java',
    'd':'php',
    'correct':'b'
},
{
    'que':'which of the following is markup language',
    'a':'cotelin',
    'b':'c#',
    'c':'js',
    'd':'php',
    'correct':'c'
}]

let index=0;
const quebox =document.querySelector("#quebox");
const option =document.querySelectorAll(".Option");
const loadq=()=>{
const data=question[index];
console.log(data);
quebox.innerText=`${data.que}`;   
option[0].nextElementSibling.innerText=data.a;
option[1].nextElementSibling.innerText=data.b;
option[2].nextElementSibling.innerText=data.c;
option[3].nextElementSibling.innerText=data.d ;
}
loadq()

const submit = document.querySelector(".btn");
const submitans = () =>{

}