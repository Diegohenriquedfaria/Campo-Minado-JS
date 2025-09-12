/*//Teste JS 
console.log("oi")
document.write("<h1>oi</h1>") //Print oi na tela no head


//Declarando variavel visivel
var x;
var y;
var a;
var alfa = 0, beta = 100;
var idade = null;
var maisvelho = 3 * idade; 
console.log(maisvelho);

//Declarando variavel implicita
var nome = "João";
var cpf = 12222222222;
var boolean = true;
var indefinido = undefined;
var nulo = null
var naosei ; 

console.log(cpf+nulo);
console.log(typeof(nome));

var nome = prompt("Qual é o seu nome?")
document.write("<h2>Olá" + nome + "seja bem vindo !")/** */



/**var numero1 = prompt("Digite um número :");
var numero2 = prompt("Digite outo número :");

var realnum1 = parseInt(numero1);
var realnum2 = parseInt(numero2);
console.log(realnum1);
console.log(realnum2);
console.log(realnum1+realnum2) /** */

function calcularIMC(){

    let peso = parseFloat(document.getElementById("peso").value);

    let altura = parseFloat(document.getElementById("altura").value);

    let resultado = document.getElementById("resultado");

    if (isNaN(peso) || peso < 0 || isNaN(altura) || altura < 0 ){
        alert("Por favor, insira valores válidos para peso e altura. ");
        return;
    }

    let imc= peso / (altura * altura);
    resultado.textContent = "Seu IMC é "+ imc.toFixed(2);
}





