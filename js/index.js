document.addEventListener('DOMContentLoaded', function () {
    nivel = document.getElementById('dificuldade');
    cronometro = document.getElementById('cronometro'); // Corrigido aqui

    nivel.addEventListener('change', function () {
        nivelSelecionado = nivel.value; // Corrigido aqui

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

    //Numero aleatorio
    function gerarNumeroAleatorio() {
        return Math.floor(Math.random() * 100) + 1;
    }



    par = document.getElementById('numeroSorteado').value;
    document.getElementById('numeroAleatorio').addEventListener('click', function () {

        function ehPar(par) {
            return par % 2 === 0;
        }

        if (ehPar(numero)) {
            document.getElementById('acertos').innerHTML = acertos;
            acertos = acertos + 1;
    
    
        } else {
            document.getElementById('erros').innerHTML = erros;
            erros = erros + 1;
        }
    });





    








});
