import "./styles.css";
import { currencyAPIUrl, inputValue, tableBody, tableBtn, tableBox, btnBox, inputBox, textBtn, textBox } from "./constants.js";
import { renderCurrencyTable } from "./utils/Render.js";
import { renderCurrencyText } from "./utils/Render.js";
import { animateCounter } from "./utils/AnimateCounter.js";
import { loadCurrencyData } from "./utils/APILoad.js";
import { initTooltips } from "./utils/TooltipInit.js";

let data = await loadCurrencyData(currencyAPIUrl);

function setUpSearchInput(data, renderFn) {
  inputBox.classList.remove("hidden");
  btnBox.classList.add("hidden");

  inputValue.addEventListener("input", () => {
    const searchText = inputValue.value.trim().toLowerCase();

    const filtered = data.filter(currency =>
    currency.cc.toLowerCase().includes(searchText) ||
    currency.txt.toLowerCase().includes(searchText)
    );
    renderFn(filtered);
  });
}

textBtn.addEventListener("click", () => {
  renderCurrencyText(animateCounter, data, textBox);
  setUpSearchInput(data, (filtered) => renderCurrencyText(animateCounter, filtered, textBox));
})

tableBtn.addEventListener("click", () => {
  renderCurrencyTable(animateCounter, data, tableBody, tableBox);
  setUpSearchInput(data, (filtered) => renderCurrencyTable(animateCounter, filtered, tableBody, tableBox));

  initTooltips();
});

