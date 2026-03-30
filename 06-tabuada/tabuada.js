'use strict'
// Importando as funções
import {
    criarListaNumeros,
    criarListaAdicao,
    criarListaSubtracao,
    criarListaMultiplicacao,
    criarListaDivisao
} from "./operacoes.js";

// Pegando o botão do HTML
const gerarTabuada = document.getElementById('gerarTabuada')

// Função que cria UMA linha da tabela
function criarLinha(numero, adicao, subtracao, multiplicacao, divisao) {

    // Pegando a tabela
    const tabela = document.getElementById('tabela')

    // Criando uma linha
    const tr = document.createElement('tr')

    // Criando cada coluna

    const tdNumeros = document.createElement('td')
    tdNumeros.textContent = numero // mostra o número (1 até 10)

    const tdAdicao = document.createElement('td')
    tdAdicao.textContent = adicao // resultado da soma


    const tdSubtracao = document.createElement('td')
    tdSubtracao.textContent = subtracao// resultado da subtração

    // Se o resultado for negativo, troca para a cor vermelho
    if (subtracao < 0) {
        tdSubtracao.style.color = 'red'
    }

    const tdMultiplicacao = document.createElement('td')
    tdMultiplicacao.textContent = multiplicacao// resultado da multiplicação

    const tdDivisao = document.createElement('td')
    tdDivisao.textContent = divisao // resultado da divisão

    // Coloca todas as colunas dentro da linha
    tr.replaceChildren(tdNumeros, tdAdicao, tdSubtracao, tdMultiplicacao, tdDivisao)

    tabela.appendChild(tr)
}

// Função que monta a tabela inteira
function preencherTabela() {
    // Pega o número digitado pelo usuário
    const numero = Number(document.getElementById('numero').value)

    // Cria listas com os resultados
    const listaNumeros = criarListaNumeros(10)
    const listaAdicao = criarListaAdicao(numero)
    const listaSubtracao = criarListaSubtracao(numero)
    const listaMultiplicacao = criarListaMultiplicacao(numero)
    const listaDivisao = criarListaDivisao(numero)

    // Limpa a tabela antes de preencher
    document.getElementById('tabela').replaceChildren()
     // Loop de 1 a 10
    for (let i = 0; i < 10; i++) {
        criarLinha(listaNumeros[i], listaAdicao[i], listaSubtracao[i], listaMultiplicacao[i], listaDivisao[i])
    }
}
// Quando clicar no botão, executa tudo
gerarTabuada.addEventListener("click", preencherTabela)