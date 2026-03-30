'use strict'

// função que simula um financiamento mês a mês
export function simularFinanciamento(valor, parcelas, taxa) {
    // array que vai guardar o resultado de cada mês
    let lista = []
    // saldo começa com o valor total do financiamento
    let saldo = valor

    // parcela fixa (mesmo valor todo mês)
    const parcela = valor / parcelas

    for (let mes = 1; mes <= parcelas; mes++) {

        // calcula o juros baseado no saldo atual
        const juros = saldo * (taxa / 100)

        // total do mês = parcela + juros
        const total = parcela + juros

        // guarda os dados desse mês dentro da lista
        lista.push({
            mes: mes,                 // número do mês
            parcela: parcela,         // valor da parcela fixa
            juros: juros,             // juros do mês
            total: total,             // total pago no mês
            saldo: saldo - parcela    // saldo após pagar a parcela
        })
        // atualiza o saldo para o próximo mês
        saldo = saldo - parcela
    }
     // devolve a lista completa com todos os meses
    return lista
}