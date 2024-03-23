import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonesPage } from './pokemones.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonesPage
  },
  /* {
    path: 'gengar',
    loadChildren: () => import('./gengar/gengar.module').then( m => m.GengarPageModule)
  },
  {
    path: 'snorlax',
    loadChildren: () => import('./snorlax/snorlax.module').then( m => m.SnorlaxPageModule)
  } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonesPageRoutingModule {}
