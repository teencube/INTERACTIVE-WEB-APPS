
import { company, year } from './configurations.js';

document.addEventListener('DOMContentLoaded', function() {
const message = '© ' + company + ' (' + year + ')';
document.querySelector('footer').innerText = message;
});
console.log (company,year);

/*incorrect syntax was used for mporting variables from the configurations.js file inplace
of from there was form. 
 The html file had a typo in the src atribute instead of scr it should be src.
  
 The scripts.js file is being executed before the footer element is loaded in the DOM,
  which means that the querySelector call in the file will not be able to find 
  the element to update.*/
