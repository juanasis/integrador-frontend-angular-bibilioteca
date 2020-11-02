import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrosComponent } from './pages/libros/libros.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';


const routes: Routes = [
  {
    path: 'libros',
    component: LibrosComponent
  },
  {
    path: 'personas',
    component: PersonasComponent
  },
  {
    path: 'prestamos',
    component: PrestamosComponent
  },
  {
    path: '**',
    redirectTo: 'libros'
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
