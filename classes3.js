class DispositivoEletronico{
  

    constructor(nome){
        this.nome = nome;
        this.ligado = false;

    }

  
    ligar(){
        if(this.ligado == false){

           var x =  console.log("O seu "+this.nome+" Já está ON");
                
            return x;

        }
        this.ligado = true;

    }

}


class SmartPhone extends DispositivoEletronico { //conceito de herença;

    constructor(nome,cor,modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;

    }


  
}


var s1 = new SmartPhone("Apple","Azul","IPHONE 9");



s1.ligar();


