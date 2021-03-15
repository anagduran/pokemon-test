import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './guard/auth-guard.service';

const routes: Routes = [
  {
    path: '', 
          loadChildren: () => import('./components/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
  path: 'pokemones', 
        loadChildren: () => import('./components/all-pokemon/all-pokemon.module').then(m => m.AllPokemonModule),
        canActivate: [AuthGuard], 

  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
