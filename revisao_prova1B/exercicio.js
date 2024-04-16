// Utilize o exercício da Mariana, agora o usuário irá informar a quantidade através do formulário e o resultado deve ser inserido após o h1 Música

function contaMariana(num) {
  var letra = ""; 
for(var index = 1; index <= num; index++) {
  letra += `\nMariana conta ${index}
Mariana conta ${index}: `; 

  for(var r = 1; r <= index; r++){
      letra += ` é ${r},`;
  } 
  letra += " é!"
  letra += "\n";
  letra += "Ana, viva a Mariana, viva a Mariana\n";
}

return letra;
  
}
let marianaDiv = document.querySelector(".p-5");
let marianaForm = document.forms[0];
let marianaInput = marianaForm.elements[0];
let marianaButton = marianaForm.elements[1];
let marianaP = document.createElement("p")
marianaDiv.appendChild(marianaP)
marianaDiv.insertBefore(marianaP, marianaForm);



marianaForm.addEventListener("submit", event =>{
  event.preventDefault();
  if(marianaInput.value > 0) {
    marianaP.innerText = contaMariana(marianaInput.value);
  } else {
    marianaP.innerText = "Erro! É esperado um número maior que 0."
  }
})



// No segundo formulário o usuário ira fornecer a url de uma imagem, esse imagem deve ser inserida após o h1 Galeria. Insira a tag img  dentro de uma div com a classe col-4 
let galeriaContainer = document.querySelector(".container");
let galeriaDiv = document.createElement("div");
galeriaDiv.classList.add("col-4");


let galeriaImg = document.createElement("img");


let galeriaForm = document.forms[1];
let galeriaInput = galeriaForm.elements[0];
let galeriaButton = galeriaForm.elements[1];

galeriaForm.addEventListener("submit", event =>{
  event.preventDefault();
  galeriaContainer.nextElementSibling.appendChild(galeriaDiv);
  galeriaDiv.appendChild(galeriaImg);
  galeriaImg.setAttribute("src", galeriaInput.value);
  galeriaDiv.appendChild(imgButton)
})


// Modifique o exercício anterior: Insira um botão com as classes btn btn-secondary btn-sm btn-remove e o escrito X abaixo da imagem inserida. Ao clicar no botão toda a div deve ser removida

let imgButton = document.createElement("button");
imgButton.classList.add("btn")
imgButton.classList.add("btn-secondary")
imgButton.classList.add("btn-sm")
imgButton.classList.add("btn-remove")
imgButton.innerText = "X"

imgButton.addEventListener("click", event => {
  galeriaContainer.nextElementSibling.removeChild(galeriaDiv);
})


/*
Exercício 1: Criando um jogo da velha

Objetivo: criar um jogo da velha usando JavaScript e manipulação do DOM. Não precisa verificar vencedores.

<div>
  <table>
    <tr>
      <td id="0"></td>
      <td id="1"></td>
      <td id="2"></td>
    </tr>
    <tr>
      <td id="3"></td>
      <td id="4"></td>
      <td id="5"></td>
    </tr>
    <tr>
      <td id="6"></td>
      <td id="7"></td>
      <td id="8"></td>
    </tr>
  </table>
  <p id="status"></p>
  <a id="reset">Reiniciar jogo</a>
</div>



Exercício 2: Criando um contador de cliques
Objetivo: criar um contador de cliques usando JavaScript e manipulação do DOM.

<div>
  <button id="click-me">Clique aqui</button>
  <p>Você clicou <span id="counter">0</span> vezes</p>
</div>


Exercício 3: Criando uma lista de tarefas
Objetivo: criar uma lista de tarefas usando JavaScript e manipulação do DOM. Para pegar os valores dos inputs use a propriedade value

<div>
  <input type="text" id="new-task" placeholder="Digite uma nova tarefa">
  <button id="add-task">Adicionar tarefa</button>
  <ul id="task-list"></ul>
</div>



Exercício 4: Criando um jogo de memória
Objetivo: criar um jogo de memória usando JavaScript e manipulação do DOM.

<div>
  <div class="card" data-card="0"></div>
  <div class="card" data-card="1"></div>
  <div class="card" data-card="2"></div>
  <div class="card" data-card="3"></div>
  <div class="card" data-card="0"></div>
  <div class="card" data-card="1"></div>
  <div class="card" data-card="2"></div>
  <div class="card" data-card="3"></div>
</div>


.card {
  width: 50px;
  height: 50px;
  background-color: gray;
  margin: 10px;
  display: inline-block;
  cursor: pointer;
 transition: all 1s linear;
}


.flip{
background-color: white;
}

*/

