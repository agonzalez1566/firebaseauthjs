import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessages } from './functions.js'

const facebookButton = document.querySelector('#facebookLogin')

facebookButton.addEventListener('click', async () => {

    const provider = new FacebookAuthProvider()

    try {
        //mostrar una ventana y poder autenticar con Facebook...
        const userCredentials = await signInWithPopup(auth, provider)
        //Close Modal Signup...
        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
        modal.hide()

        showMessages("Welcome session: " + userCredentials.user.displayName)

    } catch (error) {

        if (error.code) {
            showMessages("Error: there is some error, please check", "error")
        }
    }

})
