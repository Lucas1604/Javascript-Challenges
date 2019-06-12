

const pessoa = {

    nome: 'Lucas',
    sobrenome: 'Barcelos',
    sexo:'Masculino',
    idade: 22,
    altura: 1.88,
    peso: 83,
    andando: false,
    caminhouQuantosMetros: 0,

    fazerAniversario: function(){
        pessoa.idade++;
    },

    andar = function(metros){
        pessoa.caminhouQuantosMetros += metros;
        
        pessoa.andando = true;
      
     },

     nomeCompleto = function(){
         return 'Olá meu nome é '+ pessoa.nome + pessoa.sobrenome;
     },

     mostraIdade = function(){
        return 'Olá, tenho '+ pessoa.idade + ' ano de idade';
    }

}

// adicionando mais um metodo para a coleção
pessoa.parar = function(){
    pessoa.andando = false;
}



console.log(pessoa.andar(5));
console.log(pessoa.andar(2));
console.log(pessoa);
