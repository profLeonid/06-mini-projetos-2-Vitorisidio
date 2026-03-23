'use strict'

export function criarListaNumeros(quantidade) {
    let listaNumeros = []
    for ( let i = 1; i <= quantidade; i++) {
        listaNumeros.push(i)
    }
    return listaNumeros
}

export function criarListaPares(quantidade){
    let listaPares = []
    let par = 2
    for(let i=1; i<=quantidade; i++){
        listaPares.push(par)
        par += 2
    }
    return listaPares
}

export function criarListaImpares(quantidade){
    let listaImpares = []
    let impares = 1

    for(let i=1; i<=quantidade; i++){
        listaImpares.push(impares)
        impares += 2
    }
    return listaImpares
}

export function criarListaMulti5(quantidade){
    let listaMulti5 = []
    let multi5 = 5

    for(let i=1; i<=quantidade; i++){
        listaMulti5.push(multi5)
        multi5 += 5
    }
    return listaMulti5
}

export function criarListaPotencia2(quantidade){
    let listaPotencia2 = []

    for(let i=0; i<quantidade; i++){
        listaPotencia2.push(2**i)
    }
    return listaPotencia2
}

// module.exports = {
//     criarListaNumeros,
//     criarListaPares,
//     criarListaimpares,
//     criarListaMulti5,
//     criarListaPotencia2
// }