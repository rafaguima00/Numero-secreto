const numeroEscolhido = document.querySelector('#numero-escolhido')
const mensagemAbaixo = document.querySelector('#chute')

window.SpeechRecognition = window.SpeechRecognition || 
webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript

    exibirChute(chute)
    verificarChute(chute)
    gameOver(chute)
}

function exibirChute(chute) {
    mensagemAbaixo.innerHTML = `
    <div>Você disse: </div>
    <span class="box">${chute}</span>
    `
}

function gameOver(chute) {
    
    if (chute === "game over" || chute === "Game over") {
        document.body.innerHTML = `
            <h2 class="voce-acertou">Fim de jogo!</h2>
            <h3 class="resposta-certa">
            O jogo encerrou ao falar "Game over". Toque no botão abaixo para jogar novamente.</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }
}

recognition.addEventListener('end', () => recognition.start())
