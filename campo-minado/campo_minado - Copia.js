document.addEventListener("DOMContentLoaded", function(){
    const grid = document.querySelector('.grid');
    const tamanhoEixo = 10 ;
    const bandeirasFaltando = document.querySelector('#bandeira-faltando');
    const resultado = document.querySelector('#resultado');
    let quantiaBombas = 20 ;
    let listaQuadrados = [];
    let ehFimdejogo = false ; 
    let bandeiras = 0; 

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

            quadrado.addEventListener('click',  function CliqueNormal (event ){


                if(event.ctrlKey){
                    addBandeira(quadrado);
                }else{
                    click(quadrado);
                }
    
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
            fimdejogo();
        }else{

            let total = quadrado.getAttribute('data');
            if(total !=0 ){

                quadrado.innerHTML = total ;
                const nomeNumeros = ['um','dois','tres','quatro','cinco','seis','sete','oito'];
                const valorNumero =  parseInt(total) - 1;

                quadrado.classList.add(nomeNumeros[valorNumero]);
               
            }else{
                varreQuadrados(quadrado);

            }
            checarVitoria();

        }

        quadrado.classList.add('checado');

    }

    function fimdejogo(){
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

    function varreQuadrados(quadrado){

        const quadradoAtual = quadrado.id ; 
        const ehlateralEsquerda = (quadradoAtual % tamanhoEixo === 0 );
        const ehlateralDireita = (quadradoAtual % tamanhoEixo === tamanhoEixo-1);
        const ehlateralSuperior = (quadradoAtual < tamanhoEixo);
        const ehlateralInferior = (quadradoAtual >= tamanhoEixo * (tamanhoEixo - 1));

        setTimeout(function(){

            if(!ehlateralEsquerda && !ehlateralSuperior){

                const novoId = parseInt(quadradoAtual)  - tamanhoEixo -1;
                const novoQuadrado = document.getElementById(novoId);
                if(!novoQuadrado.classList.contains('bomba')){
                    click(novoQuadrado);

                }
            }
            if(!ehlateralSuperior){

                const novoId = parseInt(quadradoAtual) - tamanhoEixo;
                const novoQuadrado = document.getElementById(novoId);
                if(!novoQuadrado.classList.contains('bomba')){
                    click(novoQuadrado);

                }
            }
            if(!ehlateralDireita && !ehlateralSuperior){

                const novoId = parseInt(quadradoAtual)-tamanhoEixo + 1;
                const novoQuadrado = document.getElementById(novoId);
                if(!novoQuadrado.classList.contains('bomba')){
                    click(novoQuadrado);

                }
            }
            if(!ehlateralDireita){

                const novoId = parseInt(quadradoAtual) +1;
                const novoQuadrado = document.getElementById(novoId);
                if(!novoQuadrado.classList.contains('bomba')){
                    click(novoQuadrado);

                }
            }
            if(!ehlateralInferior && !ehlateralDireita){

                const novoId = parseInt(quadradoAtual) + tamanhoEixo +1 ;
                const novoQuadrado = document.getElementById(novoId);
                if(!novoQuadrado.classList.contains('bomba')){
                    click(novoQuadrado);

                }
            }
            if(!ehlateralInferior){

                const novoId = parseInt(quadradoAtual) + tamanhoEixo;
                const novoQuadrado = document.getElementById(novoId);
                if(!novoQuadrado.classList.contains('bomba')){
                    click(novoQuadrado);

                }
            }
            if(!ehlateralInferior && !ehlateralEsquerda){

                const novoId = parseInt(quadradoAtual) + tamanhoEixo - 1;
                const novoQuadrado = document.getElementById(novoId);
                if(!novoQuadrado.classList.contains('bomba')){
                    click(novoQuadrado);

                }
            }
            if(!ehlateralEsquerda){

                const novoId = parseInt(quadradoAtual) - 1;
                const novoQuadrado = document.getElementById(novoId);
                if(!novoQuadrado.classList.contains('bomba')){
                    click(novoQuadrado);

                }
            }
        },10)

    }

    function addBandeira(quadrado){

        if(ehFimdejogo)return;
        if(!quadrado.classList.contains('checado')){
            
            if (!quadrado.classList.contains('bandeira') && (bandeiras < quantiaBombas)){

                quadrado.classList.add('bandeira');
                bandeiras ++;
                quadrado.innerHTML = '🏴‍☠️';
                bandeirasFaltando.innerHTML = quantiaBombas - bandeiras;
                checarVitoria();

            }else if (quadrado.classList.contains('bandeira')) {

                quadrado.classList.remove('bandeira');
                bandeiras --;
                quadrado.innerHTML = '';
                bandeirasFaltando.innerHTML = quantiaBombas - bandeiras
            }
        }
    }

    function checarVitoria(){

        let confereBandeira = 0;
        let confereChecado = 0;
        
        for(let i = 0 ; i < listaQuadrados.length ;i++){

            if(listaQuadrados[i].classList.contains('bandeira') && listaQuadrados[i].classList.contains('bomba')) confereBandeira++;
            if(listaQuadrados[i].classList.contains('valido') && listaQuadrados[i].classList.contains('checado')) confereBandeira++;

            if(confereBandeira === quantiaBombas && confereChecado === listaQuadrados.length - quantiaBombas){
                resultado.innerHTML = 'PARÁBENS!!!!!VOCÊ VENCEU !!!' ; 
                ehFimdejogo = true ; 
            }

        }
    }







})