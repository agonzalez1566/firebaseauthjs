import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessages } from './functions.js'

const githubButton = document.querySelector('#githubLogin')

githubButton.addEventListener('click', async () => {

    const provider = new GithubAuthProvider()

    try {
        //mostrar una ventana y poder autenticar con Facebook...
        const userCredentials = await signInWithPopup(auth, provider)

        //Close Modal Signup...
        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
        modal.hide()

        showMessages("Welcome session: " + userCredentials.user.displayName)

    } catch (error) {
        //console.log(error.message)
        //console.log(error.code)
        if (error.code === "auth/account-exists-with-different-credential") {
            showMessages("auth/account-exists-with-different-credential", "error")
        } else if (error.code) {
            showMessages("Error: there is some error, please check", "error")
        }
    }

})
