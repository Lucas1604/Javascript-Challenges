

const produto1 = {
    nome: 'Blusa',
    preco: 20,

    calculaDesconto: function(){
        return this.preco * 0.1;
    }
}

const produto2 = {
    nome: 'Blusa',
    preco: 100,

    calculaDesconto: function(){
        return this.preco * 0.1;
    }
}

console.log('O valor do desconto é: ' + produto1.calculaDesconto());

console.log('O valor do desconto2 é: ' + produto2.calculaDesconto());
