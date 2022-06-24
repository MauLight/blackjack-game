
/*
let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push (newMessage)

for ( let i = 1; i < messages.length; i += 1 ) {

    console.log(messages[i])
}

for ( let i = 10; i < 101; i += 10 ) {

    console.log(i)
}

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

let cards = [7, 3, 9]

for ( let i = 0; i < cards.length; i++) {

    console.log(cards[i])
}

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

let sentence = ["Hello", "my", "name", "is","Per"] 
let greetingEl = document.getElementById("greeting-el")

for ( let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
   
}


*/


// Render the sentence in the greetingEl paragraph using a for loop and .textContent


let playerOneTime = 107
let playerTwoTime = 102

function fastestTime() {
    if (playerOneTime < playerTwoTime) {
        return playerOneTime
    }
    else if (playerOneTime > playerTwoTime) {
        return playerTwoTime
    }
    else {
        return playerOneTime
    }
}

let fastest = fastestTime()

console.log(fastest)

function totalRaceTime() {
    return playerOneTime + playerTwoTime
}

let totalTime = totalRaceTime()

console.log(totalTime)


let randomNumber = Math.floor(Math.random() * 21 + 1)

console.log(randomNumber)

function rollDice() {
    let randomNumber = Math.floor( Math.random() * 6 ) + 1
    return randomNumber
}

console.log( rollDice() )

let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating certificate....")
}

let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge === false && hasHintsLeft === false) { // && = "and"
    showSolution()
}

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

function showSolution() {
    console.log("Showing the solution....")
}

let asCompletedCourse = true
let ivesCertificate = true

if (asCompletedCourse === true || ivesCertificate === true) { // || = "or"
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating certificate....")
    }

    let likesDocumentaries = true
    let likesStartups = false
    
    if (likesDocumentaries === true || likesStartups === true) { // || = "or"
        recommendMovie()
        }

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
    }


    let player = {
/*key*/ name: "Per",
        chips: 145
    }                   //define object


let castle = {
    free: false,
    location: "Pto.varas",
    price: 12,
    months: ["april", "may", "june"]
}

console.log( castle["months"])
console.log( castle["free"] )

console/*object*/.log/*method = functions attached to objects*/


// let this = ["be", "arrays"] && this.push(another) pushes another (can be a let) into the array. (data type:complex)

/*
let Object = {          (data type:complex)
    key: "value",
    chips: 200
}
*/

// let theseIsBoolean = true        (data type:complex)
// let theseIsBoolean = false

/*

function ifElseStatements() {
    if (variable < anotherVariable) {
        return variable
    }
    else if (variable > anotherVariable) {
        return anotherVariable
    }
    else {
        return variable
    }

They work using "<= || ===", which are comparison operators

if can also be used like this:

    let beExample = true
    let andAlso = false
    
    if (beExample === true || andAlso === true) {
        understandStatement()
        }
    
    Using && "and" || "or" which are logical operators.

*/

/*

Also, remember "for loops"     

for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i]

    where "let i = 0" means the starting point being 0
          "i < cards.length" means finish point
          "i++" means how big our steps will be (++ means "add one to") */
          
// Math.random() = a number between 0.000 and 0.999
// Math.random() * n = a number between 0.000 and (n-1).999
// Math.floor() = loosing all decimals in a given number.

//return means return either values, variables or functions.