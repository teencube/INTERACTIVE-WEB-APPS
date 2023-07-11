const value = "3";
console.log(parseInt(value) + 4 + parseInt(value)); // logs 10

/*since + operator is used to both add numbers an concatenates strings,
j,s simply concatenated the string '3' with the number 4 such that it 
became string '34' then the second + operator then concatenated the string '34'
with the value then it became'343'.
To fix this i explicitly converted string '3' to a number using parseInt such that
when the numbers are added the answer is 10 */