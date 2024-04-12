// VARIABLES
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const NextPage = document.querySelector('#NextPage')
const BackPage = document.querySelector('#btn')

const text = document.querySelector('#Phrases')

let RandomPhrases
let phrases = [
    "Acredite em si mesmo e você será imparável.",
    "Cada dia é uma nova oportunidade para brilhar.",
    "Se você pode sonhar, pode realizar.",
    "A persistência leva ao sucesso.",
    "Sua determinação é sua maior força.",
    "A jornada mais longa começa com um único passo.",
]

// FUNCTIONS
function TogglePhrases(){
    RandomPhrases = Math.floor(Math.random() * phrases.length)
    text.innerText = phrases[RandomPhrases]
}

function ToggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")

    TogglePhrases()
}

// EVENTS

NextPage.addEventListener('click', ToggleScreen)
BackPage.addEventListener('click', ToggleScreen)
