import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryDetailComponent } from './repository-detail/repository-detail.component';

const routes: Routes = [
  {
    path: '',
    component: RepositoryDetailComponent,
    // resolve: { resolvedOrgaData: OrganisationResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepositoryRoutingModule {
  static components = [RepositoryDetailComponent];
}
