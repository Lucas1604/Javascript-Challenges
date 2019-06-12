
class Pessoa1 {

    constructor(param){
        
        this.json = param
    }

    foreingKey(){
        return this.json;
    }

}

const pessoa = {
    id: 01,
    nome: 'Lucas',
    idade: 22,
    altura: 1.88,
    peso: 84,
    sexo: 'masculino'
};

var pessoa1 = new Pessoa1(pessoa);

var final = pessoa1.foreingKey()

console.log(final.nome);