//**Instructions**
// #### 1. Array Destructuring
// * Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring to complete this task.

const eatables = ["banana", "cucumber", "bread", "cakes", "pizza"]; // First create an array of all the values
const [fruit, vegetable, ...rest] = eatables; // Then destruct and assign the values to their respective variables
const food = rest;

console.log("This is a fruit:", fruit);
console.log("This is a vegetable:", vegetable);
console.log("And these are foods:", food);
console.log("This is the original array:", eatables);

/* #### 2.Object Destructuring
 * Create an object which contains a few key value pairs of human names and halloween costumes e.g. `fran: "witch"`. Assign each value to a variable. Print out the values.
 */
const halloween = {
  fran: "witch",
  angelique: "Cruel Diva",
  andia: "Rockstar Housewife",
  alem: "Army Fever",
};
const { fran: v1, angelique: v2, andia: v3, alem: v4 } = halloween;
console.log(v1, v2, v3, v4);

/* #### 3. Parameters: Object Destructuring 
* Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc. 
* Then, create a function to print all of the band/musician's data. 
* Example
```javascript
`Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.
``` */

const greatBand = {
  band: "Bob Marley and the Wailers",
  leadSinger: "Bob Marley",
  greatestHit: "Redemption Song",
  nationality: "Jamaican",
  genre: "Reggae",
  died: "May, 11, 1981",
  children: "eleven",
  including: "Sharon,Cedella,Ziggy,Stephen,Rohan,Julian,Ky-Mani,Damian",
};
function musicianProfile({
  band,
  leadSinger,
  greatestHit,
  nationality,
  genre,
  died,
  children,
  including,
}) {
    const msg = `The ${nationality} musician and songwriter ${leadSinger} was the lead singer of the ${genre} band "${band}".\n ${leadSinger} and his band released many hit songs. ${greatestHit} remains one of their greatest hits.\n ${leadSinger} died in ${died}.\n He had ${children} children, including ${including}`
    console.log(msg)
}
musicianProfile(greatBand)
