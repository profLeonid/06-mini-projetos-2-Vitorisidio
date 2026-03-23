'use strict'

import {
    criarListaImpares,
    criarListaMulti5,
    criarListaNumeros,
    criarListaPares,
    criarListaPotencia2
} from "./listasNumericas.js";

//import * as listas from "./listasNumericas.js"

const gerarNumeros = document.getElementById('gerarNumeros')

function criarLinha(numero,par, impar, multi5, potencia2) {

    const tabela = document.getElementById('tabela')

    const tr = document.createElement('tr')

    const tdNumeros = document.createElement('td')
    tdNumeros.textContent = numero

    const tdPares = document.createElement('td')
    tdPares.textContent = par

    const tdImpares = document.createElement('td')
    tdImpares.textContent = impar

    const tdMulti5 = document.createElement('td')
    tdMulti5.textContent = multi5

    const tdPotencia2 = document.createElement('td')
    tdPotencia2.textContent = potencia2

    tr.replaceChildren(tdNumeros, tdPares, tdImpares, tdMulti5, tdPotencia2)

    tabela.appendChild(tr)

}

function preencherTabela() {
    const quantidade = Number(document.getElementById('quantidade').value)

    const listaNumeros = criarListaNumeros(quantidade)
    const listaPares = criarListaPares(quantidade)
    const listaImpares = criarListaImpares(quantidade)
    const listaMulti5 = criarListaMulti5(quantidade)
    const listaPotencia2 = criarListaPotencia2(quantidade)

    document.getElementById('tabela').replaceChildren()
    for (let i=0; i < quantidade; i++){
        criarLinha(listaNumeros[i], listaImpares[i],listaPares[i],listaMulti5[i],listaPotencia2[i])
    }
}

gerarNumeros.addEventListener("click", preencherTabela)