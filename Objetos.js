const pessoa = {
  nome: "Ariston",
  sobrenome: "Cândido",
  idade: 21,
  endereco: "Av. Joaquim Nabuco 302, Varaodouro - Olinda",
};

console.log(
  "Seu nome é " +
    pessoa.nome +
    " " +
    pessoa.sobrenome +
    "\n Você possui " +
    pessoa.idade +
    " anos " +
    "\nE você mora na " +
    pessoa.endereco
);

//Mais uma forma de Instanciar um Objeto;

const cachorro = new Object();
cachorro.nome = "Chris";
cachorro.especie = "Mamífero";
cachorro.idade = 5;
cachorro.raiva = true;

cachorro.latir = function(){
   
    console.log(`Au au au au meu nome é ` + this.nome);
    
     
}



function CriarPessoa(nome,idade){
 
    return {nome,idade};


}


var p1 = CriarPessoa('Julia',21);


console.log(p1)



//Chris é o nome do cachorro, ele é um mamífero com 5 anos de idade e tem Raiva, precisa se vacinar.



