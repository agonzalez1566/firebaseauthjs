import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"
import { auth, db } from "./app/firebase.js"
import { loginCheck } from "./app/functions.js"


import './app/signupForm.js'
import './app/signinForm.js'
import './app/logout.js'
import './app/googleLogin.js'
import './app/facebookLogin.js'
import './app/githubLogin.js'
import { setupPosts } from './app/postList.js'

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const querySnapShot = await getDocs(collection(db, 'post'))
        setupPosts(querySnapShot.docs)
    } else {
        //Limpia el arreglo post para que no muestre la modal...
        setupPosts([])
    }
    loginCheck(user)
})
