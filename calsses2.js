class Device{
  


    constructor(dispositivo,bateria,valor){


         
         this.dispositivo = dispositivo;
         this.bateria = bateria;
         this.valor=valor;

   


    }









    get carga(){
 
        //saber a carga
         return console.log("Seu "+this.dispositivo +" está em " + this.bateria + "%");


    }



     set carregar(carregador){  

        //carregar
           
           
                 this.bateria = this.bateria + carregador;

                 return console.log("Nova carga de " + carregador +"%," +" sua porcentagem atual é de: " + this.bateria + "%")

         
     }




     




}






let cell = new Device('celular',100,2500);



cell.carregar = 5;




