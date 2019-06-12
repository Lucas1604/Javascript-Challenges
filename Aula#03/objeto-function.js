

function criaProduto(paramNome, paramPreco){
    return {
        nome: paramNome,
        preco: paramPreco,
    
        calculaDesconto: function(){
            return this.preco * 0.1;
        }
    };
}

var produto1 = criaProduto('Blusa', 20);

console.log(produto1.calculaDesconto());