import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Organisation,
  OrganisationResolved
} from '../shared/entities/organisation';
import { OrganisationService } from '../core/services/organisation.service';
import { LoggerService } from '../core/services/logger.service';
import { HttpError } from '../shared/entities/http-error';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent implements OnInit {
  organisation: Organisation;
  errorMessage: string;

  constructor(
    private loggerService: LoggerService,
    // private organisationService$: OrganisationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loggerService.log('Accessing the organisation!');
  }

  ngOnInit(): void {
    // this.organisationService$.getOrganisationData().subscribe(
    //    (data: Organisation) => {
    //      this.organisation = data;
    //    },
    //    (err: HttpError) => console.log(err.friendlyMessage),
    //    () => this.loggerService.log('All done getting Organisation Data!')
    //  );
    const resolvedData: OrganisationResolved = this.route.snapshot.data[
      // tslint:disable-next-line:no-string-literal
      'resolvedOrgaData'
    ];
    this.loggerService.log('Prefetch organisation data from Route Resolver!');
    this.errorMessage = resolvedData.error;
    this.organisation = resolvedData.organisation;
  }

  navToRepoGrid(): void {
    this.router.navigate(['/repositories/repositories-grid']);
  }
}
