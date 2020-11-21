import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { OrganisationResolved } from '../../shared/entities/organisation';
import { OrganisationService } from './organisation.service';

@Injectable({
  providedIn: 'root',
})
export class OrganisationResolver implements Resolve<OrganisationResolved> {
  constructor(private organisationService: OrganisationService) {}

  resolve(): Observable<OrganisationResolved> {
    return this.organisationService.getOrganisationData().pipe(
      map((organisation) => ({ organisation })),
      catchError((error) => {
        const message = `Retrieval error: ${error}`;
        console.error(message);
        return of({ organisation: null, error: message });
      })
    );
  }
}
