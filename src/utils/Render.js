export function renderCurrencyTable(animateCounterFn, data, tableHead, tableBody, tableBox){
    const headRow = document.createElement('tr');
    headRow.innerHTML = `<th id="currency" class="border">Currency Code</th>
    <th id="currency-name" class="border">Currency Name</th>
    <th id="currency-value" class="border">Currency</th>
    <th id="currency-data" class="border">Date</th>`;
    tableHead.appendChild(headRow);

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

    // Update the currency count
    animateCounterFn(data.length);
}
 
export function renderCurrencyText(animateCounterFn, data, textBox){
    textBox.innerHTML = "";
    textBox.classList.remove("hidden");

     data.forEach(currency=>{
        
        const text = document.createElement('p');
        text.innerHTML = `
        <p>${currency.cc}, ${currency.txt},
        ${currency.rate.toFixed(2)}, 
        ${currency.exchangedate}
        </p>`;

        textBox.appendChild(text);
    });
    
    animateCounterFn(data.length);
}