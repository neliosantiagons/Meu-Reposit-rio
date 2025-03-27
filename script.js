
document.getElementById("conversion-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;
    const amount = parseFloat(document.getElementById("amount").value);

    const exchangeRates = {
        BRL: 1,
        EUR: 0.18,
        USD: 0.20,
        STN: 4.1
    };

    const fee = amount * 0.123;
    const amountAfterFee = amount - fee;
    const convertedAmount = amountAfterFee / exchangeRates[fromCurrency] * exchangeRates[toCurrency];

    const resultElement = document.getElementById("conversion-result");
    resultElement.innerHTML = `
        <p>Quantia original: ${amount} ${fromCurrency}</p>
        <p>Taxa de envio (7.5%)
        <p>Valor a Receber = ${convertedAmount.toFixed(2)} ${toCurrency}</p>
        <p>Para mais informações sobre taxas de câmbio, visite o site do 
            <a href="https://www.bcb.gov.br/conversao" target="_blank">Banco Central do Brasil</a>.
        </p>
    `;
});
