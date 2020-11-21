import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoriesRoutingModule } from './repositories-routing.module';
import { RepositoriesComponent } from './repositories.component';
import { RepositoriesGridComponent } from './repositories-grid/repositories-grid.component';
import { RepositoriesGridSiderComponent } from './repositories-grid-sider/repositories-grid-sider.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    RepositoriesComponent,
    RepositoriesGridComponent,
    RepositoriesGridSiderComponent
  ],
  imports: [
    CommonModule,
    RepositoriesRoutingModule,
    SharedModule
  ]
})
export class RepositoriesModule { }
