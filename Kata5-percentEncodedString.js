const urlEncode = text => {
    let message = '';
    let updatedText = text.trim();

    for (let character of updatedText) {
        if (character === ' ') {
            message += '%20';
        } else {
            message += character;
        }
    }
    return message;
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));