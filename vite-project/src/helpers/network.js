export const currencyApiURL =
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

export async function loadCurrencyData() {
  try {
    const response = await fetch(currencyApiURL);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} `);
    }

    return await response.json();
  } catch (error) {
    console.log(errorMessage, error.message);
  }
}
