import { CountUp } from "countup.js";

const tableBody = document.querySelector("#currencyTable tbody");
const counterElement = document.getElementById("currency-count");

export function filterTable(data, inputValue) {
  const searchText = inputValue.trim().toLowerCase();

  let filtered = data.filter(
    (currency) =>
      currency.cc.toLowerCase().includes(searchText) ||
      currency.txt.toLowerCase().includes(searchText)
  );
  return filtered;
}

export function renderCurrencyTable(data) {
  tableBody.innerHTML = "";

  data.forEach((currency) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td class="border">${currency.cc}</td>
        <td class="border">${currency.txt}</td>
        <td class="border">${currency.rate.toFixed(2)}</td>
        <td class="border">${currency.exchangedate}</td>
        `;
    tableBody.appendChild(row);
  });
}

export function animateCounter(newValue) {
  const countUp = new CountUp(counterElement, newValue);
  if (!countUp.error) {
    countUp.start();
  } else {
    console.error(countUp.error);
  }
}
