

// Muestra la colección del documento Post
const postList = document.querySelector('.posts')

export const setupPosts = (data) => {
    if (data.length) {
        let html = ''
        // Crea la modal para el Post
        data.forEach(doc => {
            const post = doc.data()
            const li = `
                <li class = "list-group-item list-group-item-action list-group-item-dark">
                    <h5>${post.title}</h5>
                    <p>${post.content}</p>
                </li>
                `
            html += li
        });
        //Muestra la modal en el navegador...
        postList.innerHTML = html
    } else {
        postList.innerHTML = '<h1> Login to see posts </h1>'
    }
}