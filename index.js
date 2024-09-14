




function calculateDifference(a, b) {
    return a - b;
}
console.log(calculateDifference(10, 5));


function isOdd(num) {
    return num % 2 !== 0;
}
console.log(isOdd(7));

function findMin(numbers) {
    if (numbers.length === 0) return undefined; 
    return Math.min(...numbers);
}
console.log(findMin([3, 1, 4, 1, 5, 9])); 


function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4]));


function sortArrayDescending(numbers) {
    return numbers.slice().sort((a, b) => b - a); 
}
console.log(sortArrayDescending([3, 1, 4, 1, 5, 9])); 



function lowercaseFirstLetter(str) {
    if (str.length === 0) return str; 
    return str[0].toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter('Hello'));


function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return Array.from(str).filter(char => vowels.includes(char)).length;
}
console.log(countVowels('Hello World'));





function findAverage(numbers) {
    if (numbers.length === 0) return 0; 
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
console.log(findAverage([1, 2, 3, 4, 5]));



