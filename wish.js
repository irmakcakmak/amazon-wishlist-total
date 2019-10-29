const whole = Array.from(document.getElementsByClassName('a-price-whole'));
const frac = Array.from(document.getElementsByClassName('a-price-fraction'));
whole.map((elem, index) => parseFloat(elem.textContent + frac[index].textContent)).reduce((sum, x) => sum+x).toFixed(2);
