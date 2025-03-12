const numbers = [1, 2, 3, 4, 5];
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
const printAccAndCurr = numbers.reduce((acc, curr) => console.log(`acc->${acc}, curr->${curr}`))

const wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});

console.log(sum, printAccAndCurr);
console.log(wordCount);


