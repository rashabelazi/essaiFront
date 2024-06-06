import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandesComponent } from './commandes.component';
import { CommandesRoutingModule } from './commandes-routing.module';

@NgModule({
  declarations: [
    CommandesComponent,
  ],
  imports: [
    CommonModule,
    CommandesRoutingModule
  ]
})
export class CommandesModule { }
