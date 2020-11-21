import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { GridItem } from '../../shared/entities/grid-item';
import { RepositoriesGridService } from './repositories-grid.service';

@Injectable({
  providedIn: 'root',
})
export class RepositoriesGridResolver implements Resolve<GridItem[]> {
  constructor(private repositoriesGridService: RepositoriesGridService) {}

  resolve(): Observable<GridItem[]> {
    return this.repositoriesGridService.getList();
  }
}
