const form = document.getElementById('form')

form.addEventListener('submit', handleSubmit)

const inputValue = document.getElementById('value-real')
const selectedCurrency =document.getElementById('currency')
const result = document.getElementById('result')
const btescolha = document.getElementById('btEscolha')
let valueConverted = 0
let euro = 1.09
let real = 0.20

function handleSubmit(e){
    e.preventDefault();

    if (!inputValue.value || inputValue.value < 0) {
        alert('Informe um valor correto!')
        return
    }else if (!selectedCurrency.value) {
        alert('Escolha uma moeda!')
        return
    }
    converter()
}

function converter() {
    if (selectedCurrency.value === 'eur') {
        valueConverted = inputValue.value / euro
        result.innerHTML = valueFormatter('pt-BR', 'EUR')
        animateResult()
    }else if (selectedCurrency.value === 'rel') {
        valueConverted = inputValue.value / real
        result.innerHTML = valueFormatter('en-US', 'BRL')
        animateResult()
    }
    inputValue.value = ''
    selectedCurrency.value = ''
}
function valueFormatter(locate, currency) {
    const value = valueConverted.toLocaleString(`${locate}`, { style: 'currency', currency: `${currency}`})
    return `${value}`
}

function animateResult() {
    return result.animate([
        {transform: 'translateY(-150px)'},
        {transform: 'translateY(0px)'}
    ], {duration: 500})
}
