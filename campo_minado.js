document.addEventListener("DOMContentLoaded", function(){

    const grid = document.querySelector('.grid')
    const tamanhoEixo = 10 
    const bandeirasFaltando = document.querySelector('#bandeira-faltando')
    const resultado = document.querySelector('#resultado');
    let quantiaBombas = 20 
    let listaQuadrados = [];
    let ehFimdejogo = false ; 



    function criarGrid(){

        bandeirasFaltando.innerHTML = quantiaBombas;

        const listaBombas = Array(quantiaBombas).fill('bomba')
        const listaValida = Array(tamanhoEixo *tamanhoEixo - quantiaBombas).fill('valido');
        const listaJogo = listaValida.concat(listaBombas)
        const listaEmbaralhada = listaJogo.sort(() => Math.random() - 0.5)

        for(let i = 0; i < tamanhoEixo * tamanhoEixo; i++){

            
            const quadrado = document.createElement ('div');
            quadrado.id = i ;
            quadrado.classList.add(listaEmbaralhada[i]);
            grid.appendChild(quadrado);
            listaQuadrados.push(quadrado);
            console.log(listaQuadrados);

            quadrado.addEventListener('click',  function CliqueNormal (){

                click(quadrado);
            })

            quadrado.addEventListener('contextmenu',  function cliqueBandeira (){

             //   add.Bandeira(quadrado); 
            })

        }

        for(let i = 0 ; i  < listaQuadrados.length; i++){

            let total = 0;
            const lateralEsquerda = ( i % tamanhoEixo === 0 );
            const lateralDireita = (i % tamanhoEixo === tamanhoEixo-1);
            const lateralSuperior = ( i < tamanhoEixo);
            const lateralInferior = (i >= tamanhoEixo * (tamanhoEixo - 1));


            if (listaQuadrados[i].classList.contains('valido')){

                if (!lateralSuperior && !lateralEsquerda && listaQuadrados[ i - tamanhoEixo -1].classList.contains('bomba')) total++;
                if (!lateralSuperior && listaQuadrados[i - tamanhoEixo].classList.contains('bomba') ) total++;
                if (!lateralSuperior && !lateralDireita  && listaQuadrados[ i - tamanhoEixo + 1].classList.contains('bomba')) total++;
                if (!lateralEsquerda && listaQuadrados [ i -1].classList.contains('bomba')) total++;
                if (!lateralDireita && listaQuadrados [ i+ 1].classList.contains('bomba')) total++;
                if (!lateralInferior && !lateralEsquerda && listaQuadrados[i + tamanhoEixo - 1].classList.contains('bomba')) total++;
                if (!lateralInferior && listaQuadrados[ i + tamanhoEixo].classList.contains('bomba') ) total++;
                if (!lateralInferior && !lateralDireita && listaQuadrados[i + tamanhoEixo +1 ].classList.contains('bomba')) total++;

                console.log(i)
                console.log(total)

                listaQuadrados[i].setAttribute('data' , total);
            }
        }
    }
    criarGrid() ; 

    function click(quadrado) {
        
        if(ehFimdejogo || quadrado.classList.contains('checado') || quadrado.classList.contains('bandeira'))return;

        if(quadrado.classList.contains('bomba')){
            fimdejogo(quadrado);

        }
    }


    function fimdejogo(quadrado){
        resultado.innerHTML = ' BOOM! Fim de jogo . . . ' ; 
        ehFimdejogo = true;

        for(let i = 0 ; i  < listaQuadrados.length; i++){ 

            if (listaQuadrados[i].classList.contains('bomba')){
                listaQuadrados[i].innerHTML = '💣';
                listaQuadrados[i].classList.remove('bomba');
                listaQuadrados[i].classList.add('checado');
            }
        }

    }
   
    
})