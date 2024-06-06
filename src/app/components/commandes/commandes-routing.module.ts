import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommandesComponent } from './commandes.component';

@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: CommandesComponent }
	])],
	exports: [RouterModule]
})
export class CommandesRoutingModule { }
