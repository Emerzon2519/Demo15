import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  direccion: string = "Lima 1578 - San Luis";
  datos = {
    nombre: "Juan",
    apellido: "Perez Castro"
  }

  total = 1500;

  Producto(num1:number, num2: number){
    return num1 * num2;
  }
}
