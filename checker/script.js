const passwordInput = document.querySelector('#passwordInput')
const checkButton = document.querySelector('#checkButton')
const recomendation = document.querySelector('#recomendation')
const state = document.querySelector('#state')

let currentPassword = ''
let passwordSecurity = 0

window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM cargado");
});

checkButton.addEventListener('click',() => {
    recomendation.textContent = "Nothing to add, perfect"
    passwordSecurity = 0
    currentPassword = passwordInput.value
    checkCountLetters()
    checkNumbers()
    checkCapitalLetters()
    checkExtraLetters()
    insertText()
})

function checkCapitalLetters(){
    const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const password = currentPassword.split("");
    const capitalLettersArray = capitalLetters.split("")
    let counter = 0

    capitalLettersArray.forEach( e => {
        if (password.includes(e)){
            passwordSecurity = passwordSecurity + 2
        }
        if (password.includes(e) == false){
            counter++
        }
        if (counter == 26){
            recomendation.textContent = "Use capital Letters"
            passwordSecurity--
        }
    })
}

function checkNumbers(){
    const numbers = '1234567890'
    const password = currentPassword.split("");
    const numbersArray = numbers.split("")
    let counter = 0

    numbersArray.forEach( e => {
        if (password.includes(e)){
            passwordSecurity = passwordSecurity + 2
        }
        if (password.includes(e) == false){
            counter++
        }
        if (counter == 10){
            recomendation.textContent = "Use numbers"
            passwordSecurity--
        }
    })
}

function checkExtraLetters(){
    const extraLetters = '.[]{}!@#$/,+=-?ñ'
    const password = currentPassword.split("");
    const extraLettersArray = extraLetters.split("")
    let counter = 0

    extraLettersArray.forEach( e => {
        if (password.includes(e)){
            passwordSecurity = passwordSecurity + 2
        }
        if (password.includes(e) == false){
            counter++
        }
        if (counter == 16){
            recomendation.textContent = "Use rare Letters"
            passwordSecurity--
        }
    })
}

function checkCountLetters(){
    if (currentPassword.length < 8){
        passwordSecurity = passwordSecurity - 10
        recomendation.textContent = "Use more Letters"
    }

    if ((currentPassword.length >= 8) && (currentPassword.length <= 10)){
        passwordSecurity++
    }

    if ((currentPassword.length >= 11) && (currentPassword.length <= 13)){
        passwordSecurity = passwordSecurity + 2
    }

    if ((currentPassword.length >= 14) && (currentPassword.length <= 18)){
        passwordSecurity = passwordSecurity + 3
    }

    if (currentPassword.length > 18){
        passwordSecurity = passwordSecurity + 4
    }

}

function insertText(){
    console.log(currentPassword.length >= 6)
    if ((passwordSecurity >= -5) && (passwordSecurity <= 1)){
        state.classList.remove('text-green-500')
        state.textContent = "SHIT"
        state.classList.add('text-red-500')
    }else if ((passwordSecurity >= 2) && (passwordSecurity <= 8)){
        state.classList.remove('text-red-500')
        state.textContent = "GOOD"
        state.classList.add('text-green-500')
    }else if ((passwordSecurity >= 9) && (passwordSecurity <= 14)){
        state.classList.remove('text-red-500')
        state.textContent = "VERY GOOD"
        state.classList.add('text-green-500')
    }else if ((passwordSecurity >= 15) && (passwordSecurity <= 20)){
        state.classList.remove('text-red-500')
        state.textContent = "EXCELENT"
        state.classList.add('text-green-500')
    }else if (passwordSecurity >= 21){
        state.classList.remove('text-red-500')
        state.textContent = "IMPOSSIBLE"
        state.classList.add('text-green-500')
    }else if (currentPassword.trim() == ''){
        state.classList.remove('text-green-500')
        state.textContent = "EMPTY"
        state.classList.add('text-red-500')
    }else{
        state.classList.remove('text-green-500')
        state.textContent = "BIGGEST PIECE OF SHIT"
        state.classList.add('text-red-500')
    }
}