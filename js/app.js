let userName = prompt("Hello please enter your name").toLowerCase()
let userGender = prompt('Are you a male or a female?').toLowerCase()
let userAge = prompt("How old are you?")
let userInputs = [];
let setInput = (input, arr) => (input.trim() == "yes" ) ? arr.push(input.trim()) : (input.trim() == "no" ) ? arr.push(input.trim()) : arr.push("invalid")

if (userAge <= 0) {
    alert("You can't be less than zero years old, please enter a valid age")
}

let skipWelcome = confirm('Do you want to skip the next step?') 

if (skipWelcome == false) {

    let genderWelcome = ''
    if (userGender == 'male') {
         genderWelcome = 'Mr.'
    } else if (userGender == 'female') {
         genderWelcome = 'Ms.'
    }

    alert(`Welcome to my ToDo list project ${genderWelcome}${userName}`)
}

if (skipWelcome == true) {

    let genderWelcome = ''
    if (userGender == 'male') {
         genderWelcome = 'Mr.'
    } else if (userGender == 'female') {
         genderWelcome = 'Ms.'
    }

    alert(`Welcome to my ToDo list project ${genderWelcome}${userName}`)
}

