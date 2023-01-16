import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { EventoComponent } from './evento/evento.component';
import { TwowayComponent } from './twoway/twoway.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InterpolacionComponent,
    EventoComponent,
    TwowayComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[InterpolacionComponent,
    EventoComponent,
    TwowayComponent]
})
export class PrincipalModule { }
