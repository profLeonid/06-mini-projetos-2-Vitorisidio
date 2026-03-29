'use strict'

export function criarListaNumeros(quantidade) {
    let listaNumeros = []
    for ( let i = 1; i <= quantidade; i++) {
        listaNumeros.push(i)
    }
    return listaNumeros
}

export function criarListaAdicao(numero) {
    let listaAdicao = []

    for (let i = 1; i <= 10; i++) {
        listaAdicao.push(numero + i)
    }

    return listaAdicao
}

export function criarListaSubtracao(numero) {
    let listaSubtracao = []

    for (let i = 1; i <= 10; i++) {
        listaSubtracao.push(numero - i)
    }

    return listaSubtracao
}

export function criarListaMultiplicacao(numero) {
    let listaMultiplicacao = []

    for (let i = 1; i <= 10; i++) {
        listaMultiplicacao.push(numero * i)
    }

    return listaMultiplicacao
}

export function criarListaDivisao(numero) {
    let listaDivisao = []

    for (let i = 1; i <= 10; i++) {
        listaDivisao.push((numero / i).toFixed(2))
    }

    return listaDivisao
}
