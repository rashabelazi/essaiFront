import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'user', loadChildren: () => import('./components/user/user.module').then(m => m.UserModule) },
      { path: 'roles', loadChildren: () => import('./components/roles/roles.module').then(m => m.RolesModule) },
      { path: 'marque', loadChildren: () => import('./components/marque/marque.module').then(m => m.MarqueModule) },
      { path: 'categorie', loadChildren: () => import('./components/categorie/categories.module').then(m => m.CategoriesModule) },
      { path: 'commandes', loadChildren: () => import('./components/commandes/commandes.module').then(m => m.CommandesModule) },
      { path: 'client', loadChildren: () => import('./components/client/client.module').then(m => m.ClientModule) },
      { path: '**', redirectTo: '/notfound' },
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
