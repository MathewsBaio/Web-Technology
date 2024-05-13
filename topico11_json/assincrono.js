// setTimeout(function() {
//     console.log('Time 1');
// })

// setTimeout(() => {
//     console.log('Time 2');
// }, 100);

// console.log('Log 1');


// setTimeout(() => {
//     console.log('Time 3');
// }, 50);

// console.log('Log 2');


// // ordem -> 'Log 1', 'Log 2', 'Time 1', 'Time 3', 'Time 2'

const rua = new Promise(function (resolve, reject) {
    let condicao, endereco;
    setTimeout(() => {
        condicao = true;
        if (condicao) {
            resolve("Rua A");    
        } else {
            reject(Error("Não foi possível carregar o endereço!"))
        }
        
    },3000);
})

const cidade = new Promise(function (resolve, reject) {
    let condicao, endereco;
    setTimeout(() => {
        condicao = true;
        if (condicao) {
            resolve("Juiz de Fora");    
        } else {
            reject(Error("Não foi possível carregar o endereço!"))
        }
        
    },2000); 
})

const endereco = Promise.all([rua, cidade]);

endereco.then(resolve => {
    console.log(resolve);
})


document.body.innerText = "C A R R E G A N D O . . .";

rua.then(resolve => {
    document.body.innerText = resolve;
    return "Juiz de Fora";
}).catch (reject => {
    document.body.innerText = reject;
}).finally (() => {
    document.body.innerHTML += `<br> Processamento finalizado!`;
})


const rua2 = new Promise(function (resolve, reject) {
    let condicao, endereco;
    setTimeout(() => {
        condicao = true;
        if (condicao) {
            resolve("Rua A2");    
        } else {
            reject(Error("Não foi possível carregar o endereço!"))
        }
        
    },1000);
})

const endereco2 = Promise.race([rua, rua2]);

endereco2.then(resolve => {
    console.log(resolve);
})


fetch('./exerciciocardenetas.json').then(response => {
    return response.json()
}).then(data => {
    return data.Contatos
    
}).then(contatos => {
    let codigo = `<ul> \n`
    contatos.forEach(contato => {
        codigo += `<li>${contato.nome}</li>`;
    });
    codigo += `</ul>`;
    document.body.innerHTML = codigo;
})



