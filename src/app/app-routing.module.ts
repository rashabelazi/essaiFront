import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path:'', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) }
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
