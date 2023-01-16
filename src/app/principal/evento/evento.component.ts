import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  resultado: number = 0;
  numero: number = 0;
  Incrementar(){
    return this.resultado++;
  }

  mensaje:string="";
  Generar(event:any){
    this.mensaje = event.target.value
  }
}
