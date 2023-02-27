import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  templateUrl: './palindromo.component.html',
  styleUrls: ['./palindromo.component.css']
})
export class PalindromoComponent {
    
   
   //1234 
  //hola 
 
    
     esPalindromo(palabra: string): boolean {
     
    
      // Verificar si la palabra es un palíndromo
      for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] !== palabra[palabra.length - 1 - i]) {
          return false;
        }
      }
      return true;
    }

    


    ejecutar(){
      let palabra = (<HTMLInputElement>document.getElementById("palabra")).value;


      if (this.esPalindromo(palabra) == true) {
        alert("Esta palabra es palindromo");
      }else{
        alert("Esta palabra no es palindromo");
      }
      
      
    }          

  }

  
  
   
