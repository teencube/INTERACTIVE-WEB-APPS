const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line
const day = hourOfDay === 0 && minuteOfDay === 0

let balance = undefined

if (day) {
	const taxAsDecimal = parseFloat(tax) / 100;
  const startingAfterTax = salary * (1 - taxAsDecimal);
 balance = startingAfterTax - transport - food - rent;
	
}
console.log('R ' + balance.toFixed(2));


/*Used the strict equality to check if both hourOfDay and minuteOfDay are
equal to 0 such that if they are the balance is executed else it will be skipped.
Parse float to convert tax percentage to a  decimal number then dividing the result by  100 
Starting balance after tax caculated by subtracting tax percentage from 1 then multiplying it
by salary.
final result or balance.
the toFixed(2) method is to format the balance to 2 decimal places.*/
