import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Organisation } from '../../shared/entities/organisation';
import { HttpError } from '../../shared/entities/http-error';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OrganisationService {
  orgsUrl = 'https://api.github.com/orgs/catalyst';

  constructor(private http: HttpClient) {}

  getOrganisationData(): Observable<Organisation> {
    return this.http
      .get<Organisation>(this.orgsUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(err): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
