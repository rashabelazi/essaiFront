import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarqueComponent } from './marque.component';

@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: MarqueComponent }
	])],
	exports: [RouterModule]
})
export class MarqueRoutingModule { }
