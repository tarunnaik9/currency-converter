document.addEventListener('DOMContentLoaded', function() {
    const currencyElements = document.querySelectorAll('.Currency');
    const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'INR'];

    // Populate the select options with currency codes
    currencyElements.forEach(element => {
        currencies.forEach(currency => {
            const option = document.createElement('option');
            option.value = currency;
            option.textContent = currency;
            element.appendChild(option);
        });
    });
});

const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.75, JPY: 110, INR: 74 },
    EUR: { USD: 1.18, GBP: 0.88, JPY: 129, INR: 87 },
    GBP: { USD: 1.34, EUR: 1.14, JPY: 147, INR: 99 },
    JPY: { USD: 0.0091, EUR: 0.0078, GBP: 0.0068, INR: 0.67 },
    INR: { USD: 0.013, EUR: 0.011, GBP: 0.010, JPY: 1.49 }
};

function converter() {
    const fromCurrency = document.querySelectorAll('.Currency')[0].value;
    const toCurrency = document.querySelectorAll('.Currency')[1].value;
    const amount = parseFloat(document.getElementById('input_currency').value);
    
    if (fromCurrency === 'Select' || toCurrency === 'Select' || isNaN(amount)) {
        alert('Please select both currencies and enter a valid amount.');
        return;
    }
    
    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    document.getElementById('output_currency').value = convertedAmount.toFixed(2);
}