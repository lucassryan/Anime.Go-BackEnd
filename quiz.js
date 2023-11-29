let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')


let articleQuestoes = document.querySelector('.questoes')

let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Em que mar Luffy nasceu? - One Piece.",
    alternativaA : "Mar Azul",
    alternativaB : "Grand Line",
    alternativaC : "East Blue",
    correta      : "East Blue",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Quais eram os integrantes do Time 7? - Naruto.",
    alternativaA : "Naruto, Sakura, Rock Lee",
    alternativaB : "Sasuke, Sakura, Hinata",
    alternativaC : "Naruto, Sakura, Sasuke",
    correta      : "Naruto, Sakura, Sasuke",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Quanto tempo Goku correu no Caminho da Serpente? - Dragon Ball Z.",
    alternativaA : "6 meses",
    alternativaB : "1 ano",
    alternativaC : "8 meses",
    correta      : "6 meses",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual era a Bijuu que estava selada no corpo do Naruto? - Naruto.",
    alternativaA : "Kurama",
    alternativaB : "Shukaku",
    alternativaC : "Kokuou",
    correta      : "Kurama",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual estilo o Zoro usa? - One Piece.",
    alternativaA : "Estilo Santoryu",
    alternativaB : "Estilo Tamboryu",
    alternativaC : "Estilo Bomboryu",
    correta      : "Estilo Santoryuica",
}


const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes


numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC


a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    

    let certa = questoes[numeroDaQuestao].correta
    

    if(respostaEscolhida == certa) {
        pontos += 10 
    } else {
        
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    
    bloquearAlternativas()

    setTimeout(function() {
       
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 
        location.reload();
    }, 2000)
}