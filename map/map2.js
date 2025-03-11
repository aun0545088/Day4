const words = ["hello", "world", "javascript"];
const fruits = ["apple", "banana", "cherry"];

const capitalizedWords = words.map(word => word.charAt(0).toUpperCase());
const capitalizedWords2 = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

const numberedFruits = fruits.map((fruit, index) => `${index + 1}. ${fruit}`);
// console.log(numberedFruits);

console.log(capitalizedWords, capitalizedWords2, numberedFruits);
