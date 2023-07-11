const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';


const primaryValid = parseInt (typeof number) == primaryPhone; 
const secondaryValid = parseInt (typeof number) == secondaryPhone;

if(typeof number){
    primaryPhone && secondaryPhone === true;
    
}
console.log('Primary phone is valid numerical string', primaryValid);
console.log('Secondary phone is valid numerical string', secondaryValid );

/*used parseint to check if the string contains numbers,such that if we
console.log if primary phone and secondaryphone are valid numerical strings
then we get a true or false answer*/ 

/*else if(typeof number !==  parseInt(primaryValid || secondaryValid)) {
    primaryValid && secondaryValid === false;
}