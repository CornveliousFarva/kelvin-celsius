// Define the variable of kelvin
const kelvin = 293;

// Define the variable of celsius
const celsius = kelvin - 273;

// Define the variable of farenheit
let farenheit = celsius * (9/5) + 32

// We're using let for farenheit because the value will change

// Math for farenheit
farenheit = Math.floor(farenheit)

// floor(x: number): number
// A numeric expression.
// Returns the greatest integer less than or equal to its numeric argument.

// Using string interpolation and the console log, we are logging the temperature in farenheit

console.log(`The temperature is ${farenheit} degrees Farenheit. `);

