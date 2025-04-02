import "./styles.css";
import { tippyInit } from "./helpers/tippy";
import { loadCurrencyData } from "./helpers/network";
import {
  filterTable,
  renderCurrencyTable,
  animateCounter,
} from "./helpers/rendering";

const searchInput = document.querySelector(".input-search");

tippyInit();
let currencyData = await loadCurrencyData();

function renderPage(currencyData) {
  renderCurrencyTable(currencyData);
  animateCounter(currencyData.length);
}

function refreshTable(event, data) {
  const filteredData = filterTable(data, event.target.value);
  renderPage(filteredData);
}

searchInput.addEventListener("input", (e) => refreshTable(e, currencyData));

renderPage(currencyData);
