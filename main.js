const url = 'https://icanhazdadjoke.com/';

let joke = document.getElementById('joke');
let button = document.getElementById('button');

function getJoke() {
    fetch(url, {
        headers: { 'Accept': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {
            joke.innerHTML = `<p>${data.joke}</p>`;
            console.log(data);
        })
        .catch(err => console.log(err));
    }
    button.addEventListener("click", getJoke);


