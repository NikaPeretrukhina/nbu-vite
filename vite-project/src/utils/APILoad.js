import { errorText } from "../constants.js";

export async function loadCurrencyData(currencyAPIUrl) {
    try {
        const response = await fetch(currencyAPIUrl);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} `);
        }
        return await response.json();
    }catch(error){
        console.log(errorText, error.message);
    }
}