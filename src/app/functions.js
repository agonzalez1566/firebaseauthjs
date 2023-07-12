
export function showMessages(param_text, param_style = "success") {

    Toastify({
        text: param_text,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: param_style === "success" ? "green" : param_style === "warning" ? "orange" : "red"
        },
        onClick: function () { } // Callback after click
    }).showToast();
}


const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')

export const loginCheck = user => {
    if (user) {
        loggedOutLinks.forEach(link => link.style.display = 'none')
        loggedInLinks.forEach(link => link.style.display = 'block')
    } else {
        loggedOutLinks.forEach(link => link.style.display = 'block')
        loggedInLinks.forEach(link => link.style.display = 'none')
    }
}
