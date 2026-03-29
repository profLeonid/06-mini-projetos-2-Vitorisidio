'use strict'

import {
    simularFinanciamento

} from './financeiro.js'

const botao = document.getElementById('gerarFinanciamento')

function criarLinha(mes, parcela, juros, total, saldo) {

    const tabela = document.getElementById('tabela')

    const tr = document.createElement('tr')

    const tdMes = document.createElement('td')
    tdMes.textContent = mes

    const tdParcela = document.createElement('td')
    tdParcela.textContent = parcela.toFixed(2)

    const tdJuros = document.createElement('td')
    tdJuros.textContent = juros.toFixed(2)

    const tdTotal = document.createElement('td')
    tdTotal.textContent = total.toFixed(2)

    const tdSaldo = document.createElement('td')
    tdSaldo.textContent = saldo.toFixed(2)

    tr.replaceChildren(tdMes, tdParcela, tdJuros, tdTotal, tdSaldo)

    tabela.appendChild(tr)
}

function preencherTabela() {

    const valor = Number(document.getElementById('valorTotal').value)
    const taxa = Number(document.getElementById('taxaJuros').value)
    const parcelas = Number(document.getElementById('numeroParcelas').value)

    const tabela = document.getElementById('tabela')
    tabela.replaceChildren()

    const resultado = simularFinanciamento(valor, parcelas, taxa)

    for (let i = 0; i < resultado.length; i++) {

        criarLinha(
            resultado[i].mes,
            resultado[i].parcela,
            resultado[i].juros,
            resultado[i].total,
            resultado[i].saldo
        )
    }
}

botao.addEventListener('click', preencherTabela)