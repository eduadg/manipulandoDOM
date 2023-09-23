const Focobt = document.querySelector(".app__card-button--foco");
const Curtobt = document.querySelector(".app__card-button--curto");
const Longobt = document.querySelector(".app__card-button--longo");
const html = document.querySelector('html')
const titulo = document.querySelector('.app__title')
const imagem = document.querySelector('.app__image')


Focobt.addEventListener('click', () => {
    MudaContexto('foco')
})

Curtobt.addEventListener('click', () => {
    MudaContexto('descanso-curto')
})

Longobt.addEventListener('click', () => {
    MudaContexto('descanso-longo')
})

function MudaContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    imagem.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {
        case'foco':
            titulo.innerHTML = `Otimize sua produtividade,<br> <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;

        case 'descanso-curto' :   
            titulo.innerHTML = `Que tal dar uma respirada? <br> <strong class="app__title-strong">Faça uma pausa curta!</strong>`
       
        case 'descanso-longo' : 
        
        titulo.innerHTML  =  `Hora de voltar à superfície.
        <br> <strong class="app__title-strong">Faça uma pausa longa!</strong>`
       
            default:


            break;
    }
}