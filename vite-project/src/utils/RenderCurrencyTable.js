export function renderCurrencyTable(animateCounterFn, data, tableBody){
    tableBody.innerHTML = "";

    data.forEach(currency=>{
        const row = document.createElement('tr');
        row.innerHTML = `
        <td class="border">${currency.cc}</td>
        <td class="border">${currency.txt}</td>
        <td class="border">${currency.rate.toFixed(2)}</td>
        <td class="border">${currency.exchangedate}</td>
        `;
        tableBody.appendChild(row);
    });

    // Оновлюємо лічильник кількості валют
    animateCounterFn(data.length);
}