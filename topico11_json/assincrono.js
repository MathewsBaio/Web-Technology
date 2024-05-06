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
    let condicao, endereco;
    setTimeout(() => {
        condicao = true;
        endereco = "Rua A"
        resolve("Rua A");
    },5000);
    
    
})

document.body.innerText = "C A R R E G A N D O . . .";

promessa.then((resolve) => {
    document.body.innerText = resolve;
    return "Juiz de Fora";
}).then((resolve) => {
    document.body.innerHTML += `<br> ${resolve}`;
    return "MG";
}).then((resolve) => {
    document.body.innerHTML += `<br> ${resolve}`;
}) 