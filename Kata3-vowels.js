const numberOfVowels = data => {
    let total = 0;
    for (let item of data) {
        if (item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u') {
            total++;
        }
    }
    return total;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));