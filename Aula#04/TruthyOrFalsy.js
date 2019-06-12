

/* 
Quando o valor atribuido a variavel for booleano e 
ele for retornar true ou false, nao precisa declarar a varialvel
*/

// 0 retorna false
if(0){
    teste = true;
}else{
    teste = false;
}
console.log(teste);

// aspas vazia retorna false
if(''){
    teste = true;
}else{
    teste = false;
}
console.log(teste);

// UNDEFINED vazia retorna false
if(undefined){
    teste = true;
}else{
    teste = false;
}
console.log(teste);

////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var retorna = !''        // converte pra booleano e retorna o valor contrario

var retorna = !!'true'        // mantem o mesmo valor converte para booleano

console.log(retorna)