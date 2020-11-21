import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  PreloadAllModules,
  NoPreloading,
} from '@angular/router';

import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/repositories' },
  {
    path: 'repositories',
    loadChildren: () =>
      import('./repositories/repositories.module').then(
        (m) => m.RepositoriesModule
      ),
  },
  {
    path: 'repositories/:name',
    // data: { preload: true },
    loadChildren: () =>
      import('./repository/repository.module').then((m) => m.RepositoryModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: '/repositories' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadModulesStrategy,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
  providers: [PreloadModulesStrategy],
})
export class AppRoutingModule {}
