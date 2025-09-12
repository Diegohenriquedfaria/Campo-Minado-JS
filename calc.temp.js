function CalcularTemp(){

    let c = parseFloat(document.getElementById("c").value);
    let calculo = document.getElementById("calculo");

    if(isNaN (c) || c >100 || c < 0){
        alert("Por favor , insira a temperatura em Celsius corretamente.");
        return;
    }

    let cal =  (c* 9/5) + 32
    calculo.textContent = "A temperatura em F é "+ cal.toFixed(2);
    
}