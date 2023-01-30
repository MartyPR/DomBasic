const h1=document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const form = document.querySelector('#form')
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncal');
const p = document.querySelector("#parrafo");


////btn.addEventListener('click', btnOnclick)
/*function btnOnclick(){
    console.log('Click');
    console.log(input1.value + input2.value);

}*/

form.addEventListener('submit',(event)=>{
    event.preventDefault();/***********uso del form **********/
    const sum=input1.value+input2.value;
    p.innerText='Resultado :'+ sum; 
})



