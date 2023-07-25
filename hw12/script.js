function getCharacters() {
    fetch('https://swapi.dev/api/films/2/')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data.characters);
            const informationDiv = document.getElementById('information')
            data.characters.map((character)=>{
                fetch(character)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        informationDiv.insertAdjacentHTML('beforeend', `<p>${data.name} - ${data.birth_year} - ${data.gender}</p>`)
                    });
            })
        });
      
  }



 fetch('https://swapi.dev/api/planets/')
 .then((response) => {
     return response.json();
 })
    .then((data) => {
        console.log(data.results);
        const planets = document.getElementById('planets')
            data.results.map((result)=>{
            console.log(result.name)
            planets.insertAdjacentHTML('beforeend', `<li>${result.name}`)
            })
})

function replacePage() {
    window.location.replace("file:///Users/a12345/Documents/cursor-education%202/hw12/index2.html");
}