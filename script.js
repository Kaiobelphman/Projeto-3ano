const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você conhece Dragon ball? Aqui vai algumas pergunatas!",
        alternativas: [
            {
                texto: "Bora!",
                afirmacao: "vamos lá "
            },
            {
                texto: "Não!!",
                afirmacao: "vai simmmm"
            }
        ]
    },
    {
        enunciado: "Qual é o nome do planeta natal de Goku?",
        alternativas: [
            {
                texto: "planeta Vegeta.",
                afirmacao: "."
            },
            {
                texto: "planeta Terra.",
                afirmacao: "."
            }
        ]
    },
    {
        enunciado: "Qual foi o primeiro mestre de Goku?",
        alternativas: [
            {
                texto: "mestre Kame.",
                afirmacao: "."
            },
            {
                texto: "metre Yoda.",
                afirmacao: "."
            }
        ]
    },
    {
        enunciado: "Quantas esferas do drgão exite?",
        alternativas: [
            {
                texto: "7.",
                respostaSelecionada: ""
            },
            {
                texto: "20",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual é o nome das tranformação do Goku? ",
        alternativas: [
            {
                texto: "super Saiajin.",
                afirmacao: "."
            },
            {
                texto: "kaioken.",
                afirmacao: " . "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "vamos ver se vc acertou?...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
