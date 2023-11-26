const incluirLetras = document.querySelector('#iLetters')
const incluirNumeros = document.querySelector('#iNumbers')
const incluirExtraLetras = document.querySelector('#iELetters')
const cantidadLetras = document.querySelector('#letterCount')
const generateButton = document.querySelector('#generateButton')
const passwordContent = document.querySelector('#passwordContent')
const copyButton = document.querySelector('#copyButton')

window.addEventListener("DOMContentLoaded", (event) => {
    cantidadLetras.value = 16
    incluirLetras.checked = true
    console.log(incluirNumeros.checked)
    console.log("DOM cargado");
});

generateButton.addEventListener('click', generatePassword)
copyButton.addEventListener('click', copiarAlPortapapeles)

function generatePassword(){
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

    passwordContent.value = result
}

function copiarAlPortapapeles() {
    if(passwordContent.value.trim() === ''){
        Toastify({
            text: "Fill or generate a password",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: false,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "red",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }else{
        var elementoTemp = document.createElement("textarea");
        elementoTemp.value = passwordContent.value;
        document.body.appendChild(elementoTemp);
        elementoTemp.select();
        document.execCommand("copy");
        document.body.removeChild(elementoTemp);
        Toastify({
            text: "Copied to clipboard",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: false,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "green",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
}
  