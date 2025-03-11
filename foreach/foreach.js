let arr = [1, 2, 3, 4, 5]
let sum = 0

let result = arr.forEach((el, index, arr) => {
    return `${index} - ${el}`
})

let result2 = arr.forEach((el, index, arr) => {
    console.log(`${index} - ${el}`)
})
arr.forEach((el, index) => {
    sum += el
})

console.log(result, result2, arr, sum)