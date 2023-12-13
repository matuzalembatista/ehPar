
let acertos = 0;
let erros = 0;
let jaSorteados = 0;



document.getElementById('acertos').innerHTML = acertos;
document.getElementById('erros').innerHTML = erros;
document.getElementById('jaSorteados').innerHTML = jaSorteados;
jaSorteadosPar = document.getElementById("jaSorteados");


 todosNumerosPares = document.getElementById('numeroSorteado').textContent;
 

nivel = document.getElementById('dificuldade');
cronometro = document.getElementById('cronometro'); 

//Manupular o tempo e o nivel
nivel.addEventListener('change', function () {
    nivelSelecionado = nivel.value; 

    let tempo = 0;
    if (nivelSelecionado == 'facil') {
        tempo = 90;
    } else if (nivelSelecionado == 'medio') {
        tempo = 60;
    } else if (nivelSelecionado == 'dificil') {
        tempo = 30;
    } else {
        tempo = 0;
    }

    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const tempoFormatado = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

    // Atualizando o tempo na página
    cronometro.textContent = tempoFormatado;
    document.getElementById("cronometro").innerHTML = tempoFormatado;


});










let intervalo;
//botao Iniciar
document.getElementById('btnIniciar').addEventListener('click', function () {
    clearInterval(intervalo); // Para garantir que não haja múltiplos intervalos ativos
    intervalo = setInterval(function () {
        const numero = gerarNumeroAleatorio();
        document.getElementById('numeroSorteado').textContent = numero;
    }, 1000);
});

//botao Pausar
document.getElementById('btnPausar').addEventListener('click', function () {
    clearInterval(intervalo); // Pausa a geração de números aleatórios
});


//botao Parar
document.getElementById('btnParar').addEventListener('click', function () {
    document.getElementById('numeroSorteado').innerHTML = "-";
    clearInterval(intervalo); // Pausa a geração de números aleatórios
    document.getElementById('acertos').innerHTML = 0;
    document.getElementById('erros').innerHTML = 0;
    document.getElementById('jaSorteados').innerHTML = 0;
    document.getElementById('cronometro').innerHTML = '00:00';
    
});


//Numero aleatorio
function gerarNumeroAleatorio() {
    document.getElementById('numeroSorteado').classList.remove('corPar');
    document.getElementById('numeroSorteado').classList.remove('corImpar');
    return Math.floor(Math.random() * 100) + 1;
}



// verificar numero Par ou Impar e add no html
function verificarEhPar(numero) {
    if (numero % 2 === 0) {
        acertos++;
        document.getElementById('acertos').innerHTML = acertos;
        document.getElementById('numeroSorteado').classList.add('corPar');
    } else {
        erros++;
        document.getElementById('erros').innerHTML = erros;
        document.getElementById('numeroSorteado').classList.add('corImpar');
    }
}

// Funcao para add todos os numeros pares
function verificarEhParTotal(numero) {
    if (numero % 2 === 0) {
        jaSorteados++;
        document.getElementById('jaSorteados').innerHTML = jaSorteados;
    }
}

//remover cor numeroSorteado
function removerCor(numero) {
    if (numero % 2 === 0) {
        document.getElementById('numeroSorteado').classList.remove('corPar');
    } else {
        document.getElementById('numeroSorteado').classList.remove('corImpar');
    }
}


//eventro de clink no numero e chama funcao verificarEhPar
document.getElementById('numeroSorteado').addEventListener('click', function () {
    numeroSorteado = parseInt(document.getElementById("numeroSorteado").innerHTML);
    verificarEhPar(numeroSorteado);
});




window.onload = function() {
    let jaSorteados = 0; // Certifique-se de declarar a variável jaSorteados

    let tempoRepeticao = setInterval(function() {
        let numeroSorteado = parseInt(document.getElementById("numeroSorteado").innerHTML);
        verificarEhParTotal(numeroSorteado);
    }, 1000);

    // setTimeout(function() {
    //     clearInterval(intervalo); 
    // }, 5000); 
};
















