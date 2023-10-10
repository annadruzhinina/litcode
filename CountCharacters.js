// Code a function named charCount that
// accepts a string as its only argument and
// returns an object with the count of each
// character in the string.

// Hello
// H e l l o

function charCount(str){
    let result = {};
    let match4 = str.match(/\w/g);

    if (match4) {
        for(let char of match4) {
            // char = char.toLowerCase();

            if(result[char]){
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }

    return result;
}

console.log(charCount("Hello* there"));
