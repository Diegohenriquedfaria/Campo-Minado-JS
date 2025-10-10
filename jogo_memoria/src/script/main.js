let menu = document.getElementById('menu');
let select = document.getElementById('numCards');
let start = document.getElementById('start');

for (let i = 4; i <= 10; i+=2){

    let quantiaCartas  = i*i;
    let opção = document.createElement('option');

    opção.value = quantiaCartas;
    opção.innerHTML =  quantiaCartas;

    select.appendChild(opção);


    


}