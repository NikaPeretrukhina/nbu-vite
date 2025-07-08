import { tableBody, errorText } from "../constants.js";
import {animateCounter} from "./AnimateCounter.js";


export async function loadCurrencyData(currencyAPIUrl, renderCurrencyTableFn) {
    try {
        const response = await fetch(currencyAPIUrl);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} `);
        }
        
        let data = await response.json();
        renderCurrencyTableFn(animateCounter, data, tableBody);
        return data;
    }catch(error){
        console.log(errorText, error.message);
        
    }
}