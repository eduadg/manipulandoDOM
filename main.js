const Focobt = document.querySelector(".app__card-button--foco");
const Curtobt = document.querySelector(".app__card-button--curto");
const Longobt = document.querySelector(".app__card-button--longo");
const html = document.querySelector("html");
const titulo = document.querySelector(".app__title");
const imagem = document.querySelector(".app__image");
const botoes = document.querySelectorAll(".app__card-button");
const startPausebt = document.querySelector("#start-pause");

let TempoEmSegundos = 5;
let intervaloTemporizador = null;

const musicaFoco = document.querySelector("#alternar-musica");
const musica = new Audio("/sons/luna-rise-part-one.mp3");

musicaFoco.addEventListener("change", () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});

Focobt.addEventListener("click", () => {
  MudaContexto("foco");
  Focobt.classList.add("active");
});

Curtobt.addEventListener("click", () => {
  MudaContexto("descanso-curto");
  Curtobt.classList.add("active");
});

Longobt.addEventListener("click", () => {
  MudaContexto("descanso-longo");
  Longobt.classList.add("active");
});

function MudaContexto(contexto) {
  botoes.forEach((botao) => {
    botao.classList.remove("active");
  });

  html.setAttribute("data-contexto", contexto);
  imagem.setAttribute("src", `/imagens/${contexto}.png`);
  switch (contexto) {
    case "foco":
      titulo.innerHTML = `Otimize sua produtividade,<br> <strong class="app__title-strong">mergulhe no que importa.</strong>`;
      break;

    case "descanso-curto":
      titulo.innerHTML = `Que tal dar uma respirada? <br> <strong class="app__title-strong">Faça uma pausa curta!</strong>`;

      break;

    case "descanso-longo":
      titulo.innerHTML = `Hora de voltar à superfície.
        <br> <strong class="app__title-strong">Faça uma pausa longa!</strong>`;

      break;

    default:
  }
}

const temporizador = () => {
    if (TempoEmSegundos <= 0) {
        alert('seu tempo acabou!')
        TempoEmSegundos = 5;
        zerar();
        return;
    }
    
    TempoEmSegundos -= 1;
    console.log('tempo: ' + TempoEmSegundos);
}

startPausebt.addEventListener('click' , iniciarContagem)

function iniciarContagem() {
    if (intervaloTemporizador) {
        temporizador
        zerar();
        return;
    }
    
    intervaloTemporizador = setInterval(temporizador, 1000);
    
}

function zerar() {
    clearInterval(intervaloTemporizador);
    intervaloTemporizador=null;
    return;
}




