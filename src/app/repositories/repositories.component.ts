import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  Organisation,
  OrganisationResolved,
} from "../shared/entities/organisation";
import { OrganisationService } from "../core/services/organisation.service";
import { LoggerService } from "../core/services/logger.service";
import { HttpError } from "../shared/entities/http-error";
import { FocusMonitor, FocusOrigin } from "@angular/cdk/a11y";

@Component({
  selector: "app-repositories",
  templateUrl: "./repositories.component.html",
  styleUrls: ["./repositories.component.scss"],
})
export class RepositoriesComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild("navButton") element: ElementRef<HTMLElement>;

  organisation: Organisation;
  errorMessage: string;

  constructor(
    private loggerService: LoggerService,
    // private organisationService$: OrganisationService,
    private router: Router,
    private route: ActivatedRoute,
    private _focusMonitor: FocusMonitor,
    private _cdr: ChangeDetectorRef,
    private _ngZone: NgZone
  ) {
    this.loggerService.log("Accessing the organisation!");
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
      "resolvedOrgaData"
    ];
    this.loggerService.log("Prefetch organisation data from Route Resolver!");
    this.errorMessage = resolvedData.error;
    this.organisation = resolvedData.organisation;
  }

  ngAfterViewInit() {
    this._focusMonitor.monitor(this.element).subscribe((origin) =>
      this._ngZone.run(() => {
        this._cdr.markForCheck();
      })
    );
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this.element);
  }

  navToRepoGrid(): void {
    this.router.navigate(["/repositories/repositories-grid"]);
  }
}
