import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { PalindromoComponent } from './palindromo/palindromo.component';
import { PotenciaComponent } from './potencia/potencia.component';

@NgModule({
  declarations: [
    AppComponent,
    PalindromoComponent,
    PotenciaComponent,
  ],
  imports: [
    BrowserModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
