const incluirLetras = document.querySelector('#iLetters')
const incluirNumeros = document.querySelector('#iNumbers')
const incluirExtraLetras = document.querySelector('#iELetters')
const cantidadLetras = document.querySelector('#letterCount')
const generateButton = document.querySelector('#generateButton')
const passwordContent = document.querySelector('#passwordContent')

let currentPassword = ''
let finalresult = ''

let hidden = 1

window.addEventListener("DOMContentLoaded", (event) => {
    cantidadLetras.value = 16
    incluirLetras.checked = true
    console.log(incluirNumeros.checked)
    console.log("DOM cargado");
});

generateButton.addEventListener('click', generatePassword)

function generatePassword(){
    currentPassword = ''
    finalresult = ''
    let characters = '';

    if (incluirLetras.checked == true){
        newCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        characters = characters + newCharacters
    }
    
    if (incluirNumeros.checked == true){
        newCharacters = "0123456789"
        characters = characters + newCharacters
    }

    if (incluirExtraLetras.checked == true) {
        newCharacters = ".[]{}!@#$/,+=-?ñ"
        characters = characters + newCharacters
    }
    
    let result = '';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < cantidadLetras.value) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }

    currentPassword = result
    for(let i = 0; i <= cantidadLetras.value; i++){
        finalresult = finalresult + "*"
    }
    
    if (hidden == 0){
        passwordContent.innerText = result
    }else if (hidden == 1){
        passwordContent.innerText = finalresult
        document.querySelector('.fa-eye').classList.remove("hidden")
    }
}

function revealPassword(){
    hidden = 0
    document.querySelector('.fa-eye').classList.add("hidden")
    passwordContent.innerText = currentPassword
    document.querySelector('.fa-eye-slash').classList.remove("hidden")
}

function hiddenPassword(){
    hidden = 1
    passwordContent.innerText = finalresult
    document.querySelector('.fa-eye-slash').classList.add("hidden")
    document.querySelector('.fa-eye').classList.remove("hidden")
}