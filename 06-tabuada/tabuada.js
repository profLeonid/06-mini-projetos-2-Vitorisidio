'use strict'

import {
    criarListaNumeros,
    criarListaAdicao,
    criarListaSubtracao,
    criarListaMultiplicacao,
    criarListaDivisao
} from "./operacoes.js";

const gerarTabuada = document.getElementById('gerarTabuada')

function criarLinha(numero, adicacao, subtracao, multiplicacao, divisao) {

    const tabela = document.getElementById('tabela')

    const tr = document.createElement('tr')

    const tdNumeros = document.createElement('td')
    tdNumeros.textContent = numero

    const tdAdicacao = document.createElement('td')
    tdAdicacao.textContent = adicacao

    const tdSubtracao = document.createElement('td')
    tdSubtracao.textContent = subtracao

    if (subtracao < 0) {
        tdSubtracao.style.color = 'red'
    }

    const tdMultiplicacao = document.createElement('td')
    tdMultiplicacao.textContent = multiplicacao

    const tdDivisao = document.createElement('td')
    tdDivisao.textContent = divisao

    tr.replaceChildren(tdNumeros, tdAdicacao, tdSubtracao, tdMultiplicacao, tdDivisao)

    tabela.appendChild(tr)
}

function preencherTabela() {
    const numero = Number(document.getElementById('numero').value)

    const listaNumeros = criarListaNumeros(10)
    const listaAdicao = criarListaAdicao(numero)
    const listaSubtracao = criarListaSubtracao(numero)
    const listaMultiplicacao = criarListaMultiplicacao(numero)
    const listaDivisao = criarListaDivisao(numero)

    document.getElementById('tabela').replaceChildren()
    for (let i = 0; i < 10; i++) {
        criarLinha(listaNumeros[i], listaAdicao[i], listaSubtracao[i], listaMultiplicacao[i], listaDivisao[i])
    }
}

gerarTabuada.addEventListener("click", preencherTabela)