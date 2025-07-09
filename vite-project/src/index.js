import "./styles.css";
import {currencyAPIUrl, inputValue,tableBody} from "./constants.js";
import {renderCurrencyTable} from "./utils/RenderCurrencyTable.js";
import {animateCounter} from "./utils/AnimateCounter.js";
import { loadCurrencyData } from "./utils/APILoad.js";
import { initTooltips } from "./utils/TooltipInit.js";


(async () => {
  let data = await loadCurrencyData(currencyAPIUrl, renderCurrencyTable, tableBody);
  
  inputValue.addEventListener("input", () => {
      const searchText = inputValue.value.trim().toLowerCase();

      let filtered = data.filter(currency =>
          currency.cc.toLowerCase().includes(searchText) ||
          currency.txt.toLowerCase().includes(searchText)
      );
      renderCurrencyTable(animateCounter, filtered, tableBody);
  });

  initTooltips();
})();