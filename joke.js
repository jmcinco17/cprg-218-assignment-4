function fetchjoke(){

 fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
 .then(response => response.json())
 .then(data => {
    console.log(data);
    document.getElementById('programming').textContent = data.joke;
    });

}