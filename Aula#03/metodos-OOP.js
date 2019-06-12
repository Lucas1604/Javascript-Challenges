
const pessoa = {
    nome: 'Lucas',
    idade: 22,
    altura: 1.88,
    peso: 84,
    sexo: 'masculino'
};

pessoa.cor = 'Pardo';
pessoa.sobrenome = 'Barcelos';

pessoa.andar = function(){
    return 'Andando...'
};

pessoa.aniversario = function(){
    pessoa.idade++
    return pessoa.nome + ' fez aniversario!'
};

pessoa.nomeCompleto = function(){
    return pessoa.nome + ' ' + pessoa.sobrenome;
};


console.log(pessoa);
console.log(pessoa.andar());
console.log(pessoa.nomeCompleto());
console.log(pessoa.aniversario());

// Metodos de objetos são funções usada como valores

/*

PROPRIEDADE = pessoa.nome

MÉTODO = pessoa.andar()
*/



