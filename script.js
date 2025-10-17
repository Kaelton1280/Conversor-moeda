
const form = document.getElementById("convertForm");
const amount = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("fromCurrency");
const convertedAmount = document.getElementById("convertedAmount");
const toCurrencySelect = document.getElementById("toCurrency");
const loading = document.querySelector(".loading");
const result = document.querySelector(".result");
const error = document.querySelector(".error");
const converterBtn = document.getElementById("converterBtn");

const API_URL = "https://api.exchangerate-api.com/v4/latest/"; // Exemplo de URL de API

async function convertMoney() {
    loading.style.display = "block"; // Assim que a conversão começar, mostramos o loading
    error.style.display = "none";
    result.style.display = "none"; // Desabilita o clique do botão durante a conversão


    try {
        const response = await fetch(API_URL + fromCurrencySelect.value); // Exemplo de chamada de API
        const data = await response.json(); // Supondo que a resposta seja um JSON com as taxas de câmbio
        const rate = data.rates[toCurrencySelect.value]; // Obtém a taxa de câmbio para a moeda de destino
        const convertedValue = amount.value * rate; // Converte o valor para a moeda de destino

        convertedAmount.value = convertedValue.toFixed(2);
        result.style.display = "block";

        result.innerHTML = `
            <p style="font-size:1.5rem;">${amount.value} ${fromCurrencySelect.value} = ${convertedValue.toFixed(2)} ${toCurrencySelect.value}</p>
            <p style="font-size:0.9rem; opacity:0.7; margin-top:10px">taxa:1 ${fromCurrencySelect.value} = ${rate} ${toCurrencySelect.value}</p>
        `



    } catch (err) {
        error.style.display = "block";
        error.innerText = "Erro ao converter moeda. Tente novamente.";

    }

    loading.style.display = "none";
}



form.addEventListener("submit", function (event) {
    event.preventDefault();
    convertMoney();
});