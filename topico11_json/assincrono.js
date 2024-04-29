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

const promessa = new Promise(function (resolve, reject) {
    const condicao = true;

    if(condicao) {
        resolve("Rua A");
    } else {
        reject(Error("Erro na leitura dos dados!"));
    }
})

promessa.then((resolve) => {
    document.body.innerText = resolve;
})