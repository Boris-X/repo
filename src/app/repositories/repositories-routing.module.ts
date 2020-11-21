import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriesComponent } from './repositories.component';
import { RepositoriesGridComponent } from './repositories-grid/repositories-grid.component';
import { OrganisationResolver } from '../core/services/organisation-resolver.service';
import { RepositoriesGridResolver } from '../core/services/repositories-grid-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: RepositoriesComponent,
    resolve: { resolvedOrgaData: OrganisationResolver },
  },
  { path: 'repositories-grid',
    component: RepositoriesGridComponent,
    resolve: { resolvedGridData: RepositoriesGridResolver },
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepositoriesRoutingModule {
  static components = [RepositoriesComponent, RepositoriesGridComponent];
}

