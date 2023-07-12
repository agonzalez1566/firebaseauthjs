import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessages } from './functions.js'

const signInForm = document.querySelector('#login-form');

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    //obtenemos el contenido y los guardamos en las variables...
    const email = signInForm['login-email'].value
    const password = signInForm['login-password'].value

    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)

        //Close Modal Signup...
        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
        modal.hide()

        showMessages("Welcome session: " + userCredentials.user.email)
    }
    catch (error) {

        if (error.code === 'auth/invalid-email') {
            showMessages("Error: invalid email", "error")
        } else if (error.code === 'auth/wrong-password') {
            showMessages("Error: Password should be at least 6 characters", "error")
        } else if (error.code === 'auth/user-not-found') {
            showMessages("Error: auth/user-not-found", "error")
        } else if (error.code) {
            showMessages("Error: there is some error, please check", "error")
        }
    }
})

