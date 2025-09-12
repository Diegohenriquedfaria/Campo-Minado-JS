document.addEventListener("DOMContentLoaded", function(){

    const grid = document.querySelector('.grid')
    const tamanhoEixo = 10 
    const bandeirasFaltando = this.querySelector('#bandeira-faltando')
    let quantiaBombas = 20 

    function criarGrid(){

        bandeirasFaltando.innerHTML = quantiaBombas;

        const listaBombas = Array(quantiaBombas).fill('bomba')
        const listaValida = Array(tamanhoEixo *tamanhoEixo - quantiaBombas).fill('valido');
        const listaJogo = listaValida.concat(listaBombas)
        const listaEmbaralhada = listaJogo.sort(() => Math.random() - 0.5)

        for(let i = 0; i < tamanhoEixo * tamanhoEixo; i++){

            const quadrado = document.createElement ('div')
            quadrado.id = i 
            quadrado.classList.add(listaEmbaralhada[i])
            grid.appendChild(quadrado)

        }



    }
    criarGrid()
})