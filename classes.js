class Pessoa{


    constructor(nome,sobrenome,idade){
         
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        
        

    }



    falar(){
        console.log("Olá eu sou " + this.nome + " " + this.sobrenome + " E tenho " + this.idade);


    }



    get qualIdade(){

     console.log("a Idade de " + this.nome + " é " + this.idade +" anos");

    }


}



var p1 = new Pessoa(' Robson ',' Silva ', 45);



p1.qualIdade;


