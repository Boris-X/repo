import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Contributor } from 'src/app/shared/entities/contributor';
import { GridItem } from '../../shared/entities/grid-item';

@Injectable({
  providedIn: 'root',
})
export class RepositoriesGridService {
  constructor(private http: HttpClient) {}

  getList(): Observable<GridItem[]> {
    return this.http
      .get<GridItem[]>('https://api.github.com/orgs/catalyst/repos')
      .pipe(
        mergeMap((q) => {
          return forkJoin(
            ...q.map((val) =>
              this.getContributors(val.name).pipe(
                map((contributor: any[]) => ({
                  ...val,
                  contributor: contributor
                    .sort((a, b) => b.contributions - a.contributions)
                    .slice(0, 5),
                }))
              )
            )
          );
        })
      );
  }

  // tslint:disable-next-line:variable-name
  getContributors(repository_name: string): Observable<Contributor[]> {
    return this.http.get<Contributor[]>(
      `https://api.github.com/repos/catalyst/${repository_name}/contributors`
    );
  }
}
