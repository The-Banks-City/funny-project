const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');

//document.addEventListener('DOMContentLoaded');

button.addEventListener('click', getJokes);

async function getJokes(){
   const jokeInfo = await fetch('https://icanhazdadjoke.com/', {
    headers: {
        'Accept': 'application/json'
    }
   });
   const jokeObj = await jokeInfo.json();
//    console.log(jokeObj)
jokeText.innerHTML = jokeObj.joke;

}

let body = document.querySelector('body');
document.querySelector('.blue').addEventListener('click', function(){
    body.style.backgroundColor = ('blue')
})
document.querySelector('.yellow').addEventListener('click', function(){
    body.style.backgroundColor = ('yellow')
})

document.querySelector('.purple').addEventListener('click', function(){
    body.style.backgroundColor = ('purple')
})
document.querySelector('.green').addEventListener('click', function(){
    body.style.backgroundColor = ('green')
})
document.querySelector('.orange').addEventListener('click', function(){
    body.style.backgroundColor = ('orange')
})
document.querySelector('.black').addEventListener('click', function(){
    body.style.backgroundColor = ('black')
})

