import { Component } from '@angular/core';

@Component({
  selector: 'app-potencia',
  templateUrl: './potencia.component.html',
  styleUrls: ['./potencia.component.css']
})
export class PotenciaComponent {

  numero = 0;
  potencia = 0;
  resultado = 0;

  capturarPotencia(event:any){
    this.numero = event.target.value;
    console.log(this.numero);
    
  }
   capturarNumero (event:any) {
    this.potencia = event.target.value;
    console.log(this.potencia);
    
  }
  
  result(){
    this.resultado=this.numero;
    for (let i = 1; i < this.potencia; i++) {
      this.resultado = this.resultado*this.numero;
    }
   alert(this.resultado)
    
    

  }
   




    

    

    
}
