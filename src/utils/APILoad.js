import { errorText } from "../constants.js";

export async function fetchJSON(currencyAPIUrl, userError) {
    try {
        const response = await fetch(currencyAPIUrl);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} `);
        }
        return await response.json();
    }catch(error){
        userError.innerHTML = `<p>Сталася помилка: ${error.message}</p>`;
        console.log(errorText, error.message);
    }
}