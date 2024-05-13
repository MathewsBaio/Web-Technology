let form = document.forms[1];
let textPokemon = form.elements[0];
let para = document.querySelector("#poke");


form.addEventListener('submit', p => {
    p.preventDefault();

    fetch(`https://pokeapi.co/api/v2/pokemon/${textPokemon.value}`).then(response => {
        if (response === 404) {
            para.innerText = "Pokemon não encontrado!";
        } else {
            return response.json();
        }
        
    }).then(data => {
        para.innerHTML = `<img src="${data.sprites.front_default}>"`
    })

    //async e await


} )



