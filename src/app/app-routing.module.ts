import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'estadisticas',
    loadChildren: () => import('./estadisticas/estadisticas.module').then( m => m.EstadisticasPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./catalogo/catalogo.module').then( m => m.CatalogoPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'pokemones',
    loadChildren: () => import('./pokemones/pokemones.module').then( m => m.PokemonesPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'pokemones/:id',
    loadChildren: () => import('./pokemones/pokemones.module').then( m => m.PokemonesPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'prueba',
    loadChildren: () => import('./home/home.module') .then(m=>m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
