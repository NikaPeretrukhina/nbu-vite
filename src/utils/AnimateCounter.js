import { CountUp } from 'countup.js';

export function animateCounter(newValue){
    const counterElement = document.getElementById("currency-count");
    const countUp = new CountUp(counterElement, newValue);
    if(!countUp.error){
        countUp.start();
    }else{
        console.error(countUp.error);
    }

}