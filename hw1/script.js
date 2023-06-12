const price1 = 15.678;
const price2 = 123.965;
const price3 = 90.2345;
let total = price1 + price2 + price3;
let rest =500-price1-price2-price3;
let averague = (price1+price2+price3)/3;
let roundedAmount = Math.floor(total);

console.log('price1:', price1);
console.log('price2:', price2);
console.log('price3:', price3);
console.log('total price:', total);
console.log('максимальна вартість товару', Math.max(price1, price2, price3));
console.log('мінімальна вартість товару:', Math.min(price1, price2, price3));
console.log('ціла частина вартості кожного товару:', Math.trunc(price1), Math.floor(price2), Math.floor(price3));
console.log('сума цілих частин вартості товару:', Math.trunc(price1) + Math.floor(price2) + Math.floor(price3));
console.log('округлення в меншу сторону:', Math.floor(price1), Math.floor(price2), Math.floor(price3));
console.log('сумa товарів округленa до сотень:',Math.round(total / 100) * 100);
console.log('округлення в меншу сторону суми всіх товарів:', roundedAmount);
function isEven (number) {
    return number % 2 === 0;
  }
console.log ('чи є сума всіх товарів (округлена в меншу сторону) парним числом?',isEven(roundedAmount))
function isOdd (number) {
    return number % 2 !== 0;
  }
console.log ('чи є сума всіх товарів (округлена в меншу сторону) непарним числом?',isOdd(roundedAmount))
console.log('сума решти, при оплаті всіх товарів (без округлення),якщо клієнт платить 500 грн.:', rest)
console.log('середнє значення цін, округлене до другого знаку після коми:', averague.toFixed(2));

const min = 1;
const max = 30;
let discount = Math.floor((max-min) * Math.random()+ min);
console.log('випадкова знижка від 1 до 30%:', discount);
let priceWithDiscount = (total *(100-discount)*0.01);
console.log('випадковa знижкa і сумa до оплати округленa до 2 знаків після коми:', priceWithDiscount.toFixed(2) ); 


