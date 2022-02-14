const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;  
    const resultado = document.getElementById('resultado');
    
    if(nome !=='' && altura !=='' && peso !==''){
        
        const valorIMC = (peso / (altura*altura)).toFixed(1);
        
        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso.' ;
        } else if (valorIMC < 25){
            classificacao = 'com peso ideal. Parabéns!';
        } else if (valorIMC <30){
            classificacao = 'acima do peso!';
        } else if (valorIMC < 35){
            classificacao = 'OBESIDADE 1!';
        } else if (valorIMC < 40){
            classificacao = 'OBESIDADE 2!';
        } else {
            classificacao = 'OBESIDADE 3!';
        }
        
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    }else {
        resultado.textContent = 'Preencha os CAMPOS!!';
    }
}

calcular.addEventListener('click', imc);