// Qs 1. Create a number variable num with some value. Now, print "good" if the number is divisible by 10 and print "bad" if it is not.

let num = 230;

if(num%10===0){
  console.log("Good");
} else{
  console.log("Bad");
}

// create function for this

function numCheck(num){
  if(num%10===0){
    return "Good"
  } else{
    return "Bad"
  }

}
console.log(numCheck(200));
console.log(numCheck(345));




/*  2.  Qs2. Take the user's name & age as input using prompts.
Then return back the following statement to the user as an alert (by substituting their name & age) :
name is age years old.
[Use template Literals to print this sentence]
 */


let name = "Dev";
let age = 23;
// alert(`${name} is ${age} year old.`);



/* Qs3. Write a switch statement to print the months in a quarter.
Months in Quarter 1 : January, February, March
Months in Quarter 2 : April, May, June
Months in Quarter 3 : July, August, September
Months in Quarter 4: October, November, December
 */

let quarter = 3;

switch(quarter){
  case 1:
    console.log("January"," February", "March");
    break;
  case 2:
    console.log( "April", "May", "June");
    break;
  case 3:
    console.log("July", "August", "September");
   break;

  case 4:
    console.log("October","November","December");
  break;

  default:
    console.log("Please Enter correct quarter");
}


/* Qs4. A string is a golden string if it starts with the character 'A' or 'a' and has a total	 length greater than 5.
For a given string print if it is golden or not.
 */


 
 let str = "Apple"
 
if((str[0] ==="A" || str[0]==="a") && (str.length>=5)){
  console.log(str,"Good String");
} else{
  console.log("Not Good");
}


// Qs5. Write a program to find the largest of 3 numbers.

function maxOfthree(a,b,c){
  let max;
if(a>=b && a>=c){
  return max = a;
} else if( b>=c){
  return max=b;
} else{
  return max=c;
}
}

console.log(maxOfthree(32,32,50));


/* 
Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit.
Eg : 32 and 47852 have the same last digit i.e. 2

 */


function lastDigits(num1){
  console.log(num1[num1.length-1]); 
}

lastDigits(12);