const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const robotron = document.querySelector("#robotron")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const pinturaRobotron = [
    {   cor: "azul",
        src: "img/Robotron 2000 - Azul.png"
    },
    {   cor:"amarelo",
        src: "img/Robotron 2000 - Amarelo.png"
    },
    {   cor: "branco",
        src: "img/Robotron 2000 - Branco.png"
    },
    {   cor: "preto",
        src: "img/Robotron 2000 - preto.png"
    },
    {   cor: "rosa",
        src: "img/Robotron 2000 - Rosa.png"
    },
    {   cor: "vermelho",
        src: "img/Robotron 2000 - Vermelho.png"
    }
];
let i = 0;
robotron.addEventListener("click", mudarCor);
controle.forEach((elemento) => {
    elemento.addEventListener("click", 
        (evento) => {
            manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
            atualizaEstatisticas(evento.target.dataset.controle, evento.target.dataset.peca);
        }
    )
});
 
function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]");

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
    }else{
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(operacao, peca){
    estatisticas.forEach((elemento) => {
        
        if(operacao === "-"){
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        }else{
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        }
        
    });
}
function mudarCor(){
    if(i === 6){
        i = 0;
    }
    robotron.src = pinturaRobotron[i].src;
    i++;
}