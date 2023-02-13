const generateRandomLetter = () => {

    // Set of letters in English Alphabet
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    // Generate random decimal number between 0 and 1
    let randomNumber = Math.random()

    /*  Round down randomNumber to the nearest whole 
        number and scale to match number of letters 
        in English Alphabet to index letters between 
        0 and 25 (i.e. letter "A" = position 0, 
        letter "B" = position 1, and so on.)
    */
    let letterIndex = Math.floor(randomNumber * 26)
    let randomLetter = letters[letterIndex]

    return randomLetter

    // return alert(randomLetter)
}

const updateHeader = () => {

    let randomLetter = generateRandomLetter();
    document.getElementById("output").innerHTML = randomLetter;

}

// console.log(generateRandomLetter()) 