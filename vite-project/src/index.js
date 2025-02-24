import { CountUp } from "countup.js";

const currencyData = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
const tableBody = document.querySelector('#currencyTable tbody');
const inputValue = document.querySelector('.input-search');
const errorText = 'Щось пішло не так:';
const counterElement = document.getElementById("currency-count");

let data = [];

function renderCurrencyTable(data){
    tableBody.innerHTML = "";

    data.forEach(currency=>{
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${currency.cc}</td>
        <td>${currency.txt}</td>
        <td>${currency.rate.toFixed(2)}</td>
        <td>${currency.exchangedate}</td>
        `;
        tableBody.appendChild(row);
    });

    // Оновлюємо лічильник кількості валют
    animateCounter(data.length);
}

function animateCounter(newValue){
    const countUp = new CountUp(counterElement, newValue);
    if(!countUp.error){
        countUp.start();
    }else{
        console.error(countUp.error);
    }

}


async function loadCurrencyData() {
    try {
        const response = await fetch(currencyData);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} `);
        }
        
        
        data = await response.json();
        renderCurrencyTable(data);

    }catch(error){
        console.log(errorText, error.message);
        
    }
}

function filterTable(){
    const searchText =inputValue.value.trim().toLowerCase();

    let filtered = data.filter(currency=>
        currency.cc.toLowerCase().includes(searchText) ||
        currency.txt.toLowerCase().includes(searchText)
    );
   
    renderCurrencyTable(filtered);

}
inputValue.addEventListener("input", filterTable);
loadCurrencyData();
