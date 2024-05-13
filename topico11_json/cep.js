
let form = document.forms[0]; 
let text = form.elements[0];
let para = document.querySelector("#logra");

form.addEventListener('submit', f => {
    f.preventDefault();
    

    fetch(`https://viacep.com.br/ws/${text.value}/json/`).then(response => {
        console.log(response.status);
        return response.json();

    }).then(data => {
        para.innerText = data.logradouro;
    })

})






