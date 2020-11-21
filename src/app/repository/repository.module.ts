import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryDetailComponent } from './repository-detail/repository-detail.component';
import { RepositoryRoutingModule } from './repository-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [RepositoryDetailComponent],
  imports: [
    CommonModule,
    RepositoryRoutingModule,
    SharedModule
  ]
})
export class RepositoryModule { }
