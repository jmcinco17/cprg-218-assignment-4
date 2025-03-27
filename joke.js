function fetchjoke(category ='Any'){

fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`)
.then(response => response.json())
.then(data => {
    console.log(data);
    document.getElementById('joke').textContent = data.type === "twopart" 
    ? `${data.setup} ... ${data.delivery}` :data.joke;
    document.getElementById('title').textContent = 
    category === 'Any' ? "Joke Of The Day" 
    : category === 'Pun' ? "A Random Pun" 
    : `A Random ${category} Joke`;

});
}