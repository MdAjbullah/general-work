// write a code count the given number of vowels is valid or not

function countVowels(str) {
    let count = 0;
    const vowels = 'aeiou';
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("md ajbullah mansuri "))
