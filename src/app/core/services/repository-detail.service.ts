import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { GridItem } from '../../shared/entities/grid-item';

@Injectable({
  providedIn: 'root',
})
export class RepositoryDetailService {
  constructor(private http: HttpClient) {}

  getRepositoryDetail(name) {
    return this.http
      .get<GridItem[]>('https://api.github.com/orgs/catalyst/repos')
      .pipe(
        map(item => console.log(item))
      );
  }
}
