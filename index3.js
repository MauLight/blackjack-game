let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")
let subEl = document.getElementById("sum-el")
let divEl = document.getElementById("sum-el")
let multEl = document.getElementById("sum-el")
 
function add() {

    let sumone = num1 + num2;
    sumEl.textContent =  "Sum: " + sumone
}

function sub() {
    
    let subone = num1 - num2;
    subEl.textContent =  "Sub: " + subone

}

function div() {
    
    let divone = num1 / num2;
    divEl.textContent =  "Div: " + divone

}

function mult() {
    
    let multone = num1 * num2;
    multEl.textContent =  "Mult: " + multone

}

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


