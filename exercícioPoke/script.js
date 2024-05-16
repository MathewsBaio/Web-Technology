// Usar pokeapi para mostrar o primeiro pokemon da pokedex
// Exibir o número, nome, sprite e uma lista com os tipos do pokemon
// Exibir um botão de próximo para avançar 1 número
// Exibir um botão de anterior, caso num for > 0, recuar 1 número

// sprites front_default
// types (array) (listar nomes)

// https://pokeapi.co/api/v2/pokemon/${textPokemon.value}`


let nome = document.querySelector('#name');
let numPara = document.querySelector('#num');
let list = document.querySelector('ul');
let image = document.querySelector('img');
let proxButton = document.querySelector('#prox')
let antButton = document.querySelector('#ant');
let num = 1;
let tipos;
let resStatus = document.querySelector(`#status`)

proxButton.addEventListener('click', e => {
    num++;
    numPara.textContent = num; 
    requestPokemon(num);
})

antButton.addEventListener('click', e => {
    if(num > 1) {
        num--;
        numPara.textContent = num;
        requestPokemon(num);
    }
})


async function requestPokemon(value) {
    const dataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
    const dataJson = await dataResponse.json();
    
        nome.textContent = `Nome: ${dataJson.name}`

        list.innerHTML = ' '
        dataJson.types.forEach(type => {
            
            list.innerHTML += `<li>Tipo: ${type.type.name}</li>` 
        });

        image.src = `${dataJson.sprites.front_default}`
        
    
}



