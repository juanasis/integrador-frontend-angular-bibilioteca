import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
 

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    PersonasComponent,
    PrestamosComponent,
    MenuComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
