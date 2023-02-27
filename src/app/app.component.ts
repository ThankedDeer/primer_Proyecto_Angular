import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'primer_Proyecto_Angular';
  
  show(show: string) {
  let display = (<HTMLInputElement>document.getElementById("screen"));
  display.value += show;
  }
  wipe() {
    let display = (<HTMLInputElement>document.getElementById("screen"));
    display.value=""
  }
  calc(calc: string){
    let display = (<HTMLInputElement>document.getElementById("screen"));
    display.value= eval(display.value)
  }


}



