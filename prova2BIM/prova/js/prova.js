/* Questão 1-Criação de objetos (2.0pt)

Utilize módulos para criar um conjunto de objetos da classe Bagmon:

Crie a classe Bagmon com os atributos: dex, nome, tipos e imagens.
Utilize async e await para ler o conjunto de dados do arquivo data/bagmon.json.
Utilize este conjunto de dados para criar um array de objetos da classe Bagmon.
*/

async function instanciarObjeto(index) {
    
    try {
        const response = await fetch('../data/bagmon.json');
        const data = await response.json(); 
        
        let dex, nome, tipos, urlImagem;

        dex = data.bagmon[index].dex
        nome = data.bagmon[index].nome
    } catch (error) {
        
    }
    


    
}


class Bagmon {
    
    #dex;
    #nome;
    #tipos
    #urlImagem
    
    constructor(dex, nome, tipos, urlImagem) {
        
        this.#dex = dex
        this.#nome = nome
        this.#tipos = tipos
        this.#urlImagem = urlImagem

    }

    get dex() {
        return this.#dex;
    }

    set dex(dex) {
        this.#dex = dex;
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    get tipos() {
        return this.#tipos;
    }

    set tipos(tipos) {
        this.#tipos = tipos;
    }

    get urlImagem() {
        return this.#urlImagem;
    }

    set urlImagem(urlImagem) {
        this.#urlImagem = urlImagem;
    }


}



/* Questão 2- Galeria de Imagens (2.0 pt)

Utilize o array de objetos para iterar na galeria de imagens:

Defina a primeira imagem do array como a imagem inicial na área de visualização.
Na div nome insira a seguinte informação: #dex - nome.
Na div tipos, para cada tipo crie um span com as seguintes informações: 
         <span class="tag" id="tipo">tipo</span>
Adicione event listeners aos botões "Anterior" e "Próximo" que detectem o evento de clique do mouse.
Quando o botão "Anterior" for clicado, atualize os dados de acordo com o novo objeto. Se o objeto for o primeiro, exiba as informações do último.
Quando o botão "Próximo" for clicado, atualize os dados de acordo com o novo objeto. Se o objeto for o último, exiba as informações do primeiro.
*/