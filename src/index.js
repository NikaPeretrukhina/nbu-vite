import "./styles.css";
import { currencyAPIUrl, inputValue, tableBody, tableBtn, tableBox, btnBox, inputBox, textBtn, textBox, tableHead, userError } from "./constants.js";
import { renderCurrencyTable } from "./utils/Render.js";
import { renderCurrencyText } from "./utils/Render.js";
import { animateCounter } from "./utils/AnimateCounter.js";
import { fetchJSON } from "./utils/APILoad.js";
import { initTooltips } from "./utils/TooltipInit.js";

let data = await fetchJSON(currencyAPIUrl, userError) || [];//подивитись як зробити так щоб була показана тіки помилка а не хтмл і помилка

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
  renderCurrencyTable(animateCounter, data, tableHead, tableBody, tableBox);
  setUpSearchInput(data, (filtered) => renderCurrencyTable(animateCounter, filtered, tableBody, tableBox));

  initTooltips();
});

