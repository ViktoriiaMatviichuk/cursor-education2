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