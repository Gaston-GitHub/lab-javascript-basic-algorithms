// Iteration 1: Names and Input
// ### Iteration 1: Names and Input

//	1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = 'Dixon'
//	1.2 Print `"The driver's name is XXXX"`.
console.log(`"The driver's name is ${hacker1}"`)

//  1.3 Create a variable `hacker2` with the navigator's name.
const hacker2 = 'Ame'

//  1.4 Print `"The navigator's name is YYYY"`.
console.log(`"The navigator's name is ${hacker2}"`)

// Iteration 2: Conditionals

// 2.1.  Depending on which name [is longer]
  //  - `The driver has the longest name, it has XX characters.` or <br>
  //  - `It seems that the navigator has the longest name, it has XX characters.` or <br>
  //  - `Wow, you both have equally long names, XX characters!`.

const hacker1 = 'Dixon';
const hacker2 = 'Ame';

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters` )
} else if (hacker1.length === hacker2.length) {
  console.log (`Wow, you both equally long name, ${hacker2.length} characters!`)
}

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and [in capitals]
let hacker1 ='Dixon';

let result = "";
for (let i = 0; i < hacker1.length; i++) {
result = result + " " + hacker1[i].toUpperCase();
}

result = result.trim();
console.log(result);

//3.2 Print all the characters of the navigator's name, in reverse order. 

var j = 'Dixon';
var k = j.split('');

var reversedArr = []
for(var i = k.length; i >= 0; i--) {
    reversedArr.push(k[i])
}

var reversedStr = reversedArr.join('')
console.log(reversedStr)

// 3.3 Depending on the [lexicographic order] of the strings, print:
//- Generate 3 paragraphs. Store the text in a variable type of string.
//- Make your program count the number of words in the string.
//- Make your program count the number of times the Latin word [`et`]appears.

const hacker1 = 'Dixon';
const hacker2 = 'Ame';

if (hacker1 < hacker2) console.log(`"The driver's name goes first"`);
else if (hacker1 > hacker2) console.log('Yo, the navigator goes first definitely.');
else console.log('What?! You both have the same name?');

