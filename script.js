const num = document.querySelectorAll('.numero')
const display = document.querySelector('.display')
const decimal = document.querySelector('.decimal')
const apagar = document.querySelector('.apagar')
const operador = document.querySelectorAll('.operador')
const igualdade = document.querySelector('.igualdade')
let valorAnterior = null
let operadorAtual = null

num.forEach(botao => {
    botao.addEventListener('click', () => {
        if(display.textContent === '0') {
            display.textContent = botao.textContent
        }
        else {
            display.textContent += botao.textContent
        }
    })
})

decimal.addEventListener('click', () => {
    if (!display.textContent.includes('.')){
        display.textContent += '.'
    }
})

apagar.addEventListener('click', () => {
    display.textContent = '0'
})

operador.forEach(botao => {
    botao.addEventListener('click', () => {
        valorAnterior = Number(display.textContent)
        operadorAtual = botao.textContent
        display.textContent = '0'
    })
})

igualdade.addEventListener('click', () => {
    if (valorAnterior === null || operadorAtual === null) return

    const valorAtual = Number(display.textContent)
    let resultado

    switch (operadorAtual) {
        case '+':
            resultado = valorAnterior + valorAtual
            break
        case '-':
            resultado = valorAnterior - valorAtual
            break
        case 'x':
            resultado = valorAnterior * valorAtual
            break
        case '÷':
            if (valorAtual === 0) {
                display.textContent = 'Erro'
                return
            }
            resultado = valorAnterior / valorAtual
            break
    }

    display.textContent = resultado
    valorAnterior = null
    operadorAtual = null
})