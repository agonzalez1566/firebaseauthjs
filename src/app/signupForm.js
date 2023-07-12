import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessages } from './functions.js'

//Variable con el query de la eqiqueta <form id="signup-form"> de main.js
const signupForm = document.querySelector('#signup-form')

//listar la información del contenido de los campos de la modal..
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    //obtenemos el contenido y los guardamos en las variables...
    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    //console.log(email, password)

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)

        //console.log(userCredentials)

        //Close Modal Signup...
        const signupModal = document.querySelector('#signupModal')
        const modal = bootstrap.Modal.getInstance(signupModal)

        modal.hide()
        showMessages("Welcome " + userCredentials.user.email)

    }
    catch (error) {

        if (error.code === 'auth/invalid-email') {
            showMessages("Error: invalid email", "error")
        } else if (error.code === 'auth/weak-password') {
            showMessages("Error: Password should be at least 6 characters", "error")
        } else if (error.code === 'auth/email-already-in-use') {
            showMessages("Error: auth/email-already-in-use", "error")
        } else if (error.code) {
            showMessages("Error: there is some error, please check", "error")
        }
    }
})
