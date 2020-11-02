import { Component, OnInit } from '@angular/core';

 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  rutas = [
    {
      path: '/libros',
      name: 'Libros'
    },
    {
      path: '/personas',
      name: 'Personas'
    },
    {
      path: '/prestamos',
      name: 'Prestamos'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
