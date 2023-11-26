const passwordInput = document.querySelector('#passwordInput')
const checkButton = document.querySelector('#checkButton')
const recomendation = document.querySelector('#recomendation')
const state = document.querySelector('#state')

let problems = []

window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM cargado");
});

checkButton.addEventListener('click',() => {
    problems = []
    limpiarHTML()
    const state = evaluarContrasena(passwordInput.value)
    console.log(state)
})


function evaluarContrasena(contrasena) {
    let puntuacion = 0;

    if (contrasena.length >= 8) {
        puntuacion += 2;
    } else {
        problems.push("Notice: The password must be at least 8 characters.")
    }

    if (/[A-Z]/.test(contrasena)) {
        puntuacion += 2;
    } else {
        problems.push("Notice: The password must contain at least one uppercase letter.")
    }

    if (/[/!@#$%^&*(),.?":{}|<>]/.test(contrasena)) {
        puntuacion += 2;
    } else {
        problems.push("Notice: The password must contain at least one special character.")
    }

    if (/\d/.test(contrasena)) {
        puntuacion += 2;
    } else {
        problems.push("Notice: The password must contain at least one number.")
    }

    if(problems.length === 0){
        const h4 = document.createElement('h4')
        h4.innerText = "Very Strong"
        h4.classList.add("flex", "justify-center", "inter600", "text-green-800", "text-xl")
        recomendation.appendChild(h4)
    }else{
        const ul = document.createElement('ul')
        problems.forEach(element => {
            const li = document.createElement('li')
            li.innerText = element
            li.classList.add("border-2","p-2","rounded-lg","border-red-300", "mt-2")
            ul.appendChild(li)
        });
        
        if (puntuacion >= 6) {
            const h4 = document.createElement('h4')
            h4.innerText = "Strong"
            h4.classList.add("flex", "justify-center", "inter600", "text-green-800", "text-xl")
            recomendation.appendChild(h4)
        } else if (puntuacion >= 4) {
            const h4 = document.createElement('h4')
            h4.innerText = "Moderate"
            h4.classList.add("flex", "justify-center", "inter600", "text-green-600", "text-xl")
            recomendation.appendChild(h4)
        } else {
            const h4 = document.createElement('h4')
            h4.innerText = "Weak"
            h4.classList.add("flex", "justify-center", "inter600", "text-red-800", "text-xl")
            recomendation.appendChild(h4)
        }

        recomendation.appendChild(ul)
    }

    if (puntuacion >= 6) {
        return "Fuerte";
    } else if (puntuacion >= 4) {
        return "Moderada";
    } else {
        return "Débil";
    }
}

function limpiarHTML(){
    while(recomendation.firstChild){
        recomendation.removeChild(recomendation.firstChild)
    }
}