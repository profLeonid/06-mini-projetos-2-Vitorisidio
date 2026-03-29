'use strict'

export function simularFinanciamento(valor, parcelas, taxa) {

    let lista = []

    let saldo = valor
    const parcela = valor / parcelas

    for (let mes = 1; mes <= parcelas; mes++) {

        const juros = saldo * (taxa / 100)
        const total = parcela + juros

        lista.push({
            mes: mes,
            parcela: parcela,
            juros: juros,
            total: total,
            saldo: saldo - parcela
        })

        saldo = saldo - parcela
    }

    return lista
}