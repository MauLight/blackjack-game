let welcomeEl = document.getElementById("welcome-el")

let name = "Mau"
let greetings = "Hello there, I am "

let myGreetings = greetings + name
    
welcomeEl.innerText = myGreetings

welcomeEl.innerText += " 👋"
