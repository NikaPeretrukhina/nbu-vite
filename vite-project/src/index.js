import { CountUp } from "countup.js";
import "./styles.css";
import tippy from 'tippy.js';

const currencyData = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
const tableBody = document.querySelector('#currencyTable tbody');
const inputValue = document.querySelector('.input-search');
const errorText = 'Щось пішло не так:';
const counterElement = document.getElementById("currency-count");

let data = [];

function renderCurrencyTable(animateCounterFn, data, tableBody){
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
        renderCurrencyTable(animateCounter, data, tableBody);

    }catch(error){
        console.log(errorText, error.message);
        
    }
}


inputValue.addEventListener("input", () => {
    const searchText = inputValue.value.trim().toLowerCase();

    let filtered = data.filter(currency=>
        currency.cc.toLowerCase().includes(searchText) ||
        currency.txt.toLowerCase().includes(searchText)
    );
   
    renderCurrencyTable(animateCounter, filtered, tableBody);
});
loadCurrencyData();

tippy('#currency', {
    content: 'Currency!',
    theme: 'tomato',
  });
tippy('#currency-name', {
    content: 'Name!',
    theme: 'tomato',
  });
tippy('#currency-value', {
    content: 'Value!',
    theme: 'tomato',
  });
tippy('#currency-data', {
    content: 'Data!',
    theme: 'tomato',
  });
