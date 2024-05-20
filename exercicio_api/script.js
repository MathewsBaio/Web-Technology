let par = document.querySelector('div');
const url = "https://cors-anywhere.herokuapp.com/https://www.google.com/";


async function test() {
    try {
        const cons = await fetch(url)
        const data = await cons.text()

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

test();


