export function renderCurrencyTable(animateCounterFn, data, tableBody, tableBox){
    tableBody.innerHTML = "";
    tableBox.classList.remove("hidden");
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
 
export function renderCurrencyText(animateCounterFn, data, textBox){
    textBox.innerHTML = "";
    textBox.classList.remove("hidden");

     data.forEach(currency=>{
        
        const text = document.createElement('p');
        text.innerHTML = `
        <p>${currency.cc},${currency.txt},
        ${currency.rate.toFixed(2)},
        ${currency.exchangedate}
        </p>`;

        textBox.appendChild(text);
    });
    
    animateCounterFn(data.length);
}