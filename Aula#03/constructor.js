

class Produto {
    constructor(paramNome, paramPreco){
        this.nome = paramNome;
        this.preco = paramPreco;
    }

    calculaDesconto(){
        return this.preco * 0.1;
    }
}

const produto1 = new Produto('Blusa', 100);
const produto2 = new Produto('Camiseta', 200);

console.log(produto1.calculaDesconto());

console.log(produto2.calculaDesconto());

