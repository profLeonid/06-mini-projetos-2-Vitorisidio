'use strict'

// importa a função que faz o cálculo do financiamento
import {
    simularFinanciamento

} from './financeiro.js'

// pega o botão do HTML
const gerarFinanciamento = document.getElementById('gerarFinanciamento')

// função que cria UMA linha da tabela
function criarLinha(mes, parcela, juros, total, saldo) {
    // Pegando a tabela
    const tabela = document.getElementById('tabela')
    // cria uma linha
    const tr = document.createElement('tr')

    // cria cada coluna e coloca os valores

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

    // coloca todas as colunas dentro da linha
    tr.replaceChildren(tdMes, tdParcela, tdJuros, tdTotal, tdSaldo)

    // adiciona a linha na tabela
    tabela.appendChild(tr)
}
// função principal que monta a tabela inteira
function preencherTabela() {

    // pega os valores digitados pelo usuário
    const valor = Number(document.getElementById('valorTotal').value)
    const taxa = Number(document.getElementById('taxaJuros').value)
    const parcelas = Number(document.getElementById('numeroParcelas').value)

    // limpa a tabela antes de gerar novamente
    const tabela = document.getElementById('tabela')
    tabela.replaceChildren()

    // chama a função que faz os cálculos do financiamento
    const resultado = simularFinanciamento(valor, parcelas, taxa)

    for (let i = 0; i < resultado.length; i++) {

        // cria uma linha para cada mês usando os dados calculados
        criarLinha(
            resultado[i].mes,
            resultado[i].parcela,
            resultado[i].juros,
            resultado[i].total,
            resultado[i].saldo
        )
    }
}
// quando clicar no botão, executa a função
gerarFinanciamento.addEventListener('click', preencherTabela)