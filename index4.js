let homEl = document.getElementById("hom-el")
let gueEl = document.getElementById("gue-el")

let count1 = 0
let count2 = 0
 
function plusoneh() {
    count1 += 1
    homEl.textContent = count1
}
function plustwoh() {
    count1 += 2
    homEl.textContent = count1
}
function plusthreeh() {
    count1 += 3
    homEl.textContent = count1
}

function plusoneg() {
    count2 += 1
    gueEl.textContent = count2
}
function plustwog() {
    count2 += 2
    gueEl.textContent = count2
}
function plusthreeg() {
    count2 += 3
    gueEl.textContent = count2
}