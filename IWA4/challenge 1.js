const year = 2050;
const status = 'student';
let count = 0;

if (year === 2050) {
  console.log('January', 'New Year’s Day');
  console.log('March', 'Human Rights Day');
  console.log('April', 'Family Day');
  console.log('April', 'Freedom Day');
  count += 4;

  if (status === 'student') {
    console.log('June', 'Youth Day');
    count += 1;
  }

  console.log('August', 'Women’s Day');
  console.log('September', 'Heritage Day');
  console.log('December', 'Day of Reconciliation');
  count += 3;

  if (status === 'parent') {
    console.log('December', 'Christmas Day');
    count += 1;
  }

  console.log('December', 'Day of Goodwill');
  count += 1;
}

console.log('Your status is:', status);
console.log('The year is:', year);
console.log('The total holidays is:', count);



/*Semicolons were added where necessary.
-The count variable was being redeclared inside the if statements, which was fixed by
 changing the let to count +=.
- The final console.log() statements were updated to log the correct variable names.
- The logic for logging the holidays was corrected and updated.
- Missing closing parentheses and quotation marks were added to the console.log() statements.
 -The date variable was being reassigned a string value instead of a number, which was fixed.
 -The date variable was changed to year for clarity.*/