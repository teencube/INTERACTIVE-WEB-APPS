const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

let location = 'RSA';
let currency = 'R';

let shipping = 0;

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

if (location === 'RSA') {
  currency = 'R'
  shipping = 400;
  
} else if (location === 'NAM' || '') {
  currency = '$'
  shipping = 600;
  
} else {
  shipping = 800;
}

if (shoes + toys + shirts + batteries + pens >= 1000 && location === 'RSA' || 'NAM') {
    shipping === 0;
  }else if (customer !== 1){

  }
  console.log(FREE_WARNING) 

if (location === 'NK') {
 
} 
console.log(BANNED_WARNING);
console.log('Price:', currency, shoes + toys + shirts + batteries + pens + shipping);

//problem with the code//

/*The code uses the assignment operator = instead of the equality operator === or == to 
compare values in some of the if statements.
The logic for free shipping is not correctly implemented and does not consider all the 
conditions mentioned in the problem statement.
The calcShipping variable was used in one of the statements but isnt defined by the code.*/





/*The current code is now clear and much more readable.
-The variables FREE_WARNING, BANNED_WARNING, and NONE_SELECTED are defined 
as constants using the const keyword.
 -variables like location and currency are declared using the let keyword and 
 are given initial values and variables like shoes ,toys ,batteries are declared
  and initialized with their costs.
  -Warning messages and free shipping are clearly shown by if statements.
  -The final output is clearly shown on the console log.*/
