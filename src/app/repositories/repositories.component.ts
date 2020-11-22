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
// import { OrganisationService } from "../core/services/organisation.service";
import { LoggerService } from "../core/services/logger.service";
import { FocusMonitor, FocusOrigin } from "@angular/cdk/a11y";

@Component({
  selector: "app-repositories",
  templateUrl: "./repositories.component.html",
  styleUrls: ["./repositories.component.scss"],
})
export class RepositoriesComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild("navButton") elementButton: ElementRef<HTMLElement>;
  @ViewChild("navGitHub") elementGitHub: ElementRef<HTMLElement>;
  @ViewChild("navBlog") elementBlog: ElementRef<HTMLElement>;

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
    this.loggerService.log("Accessing The Organisation Page!");
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
    this._focusMonitor.monitor(this.elementButton).subscribe((origin) =>
      this._ngZone.run(() => {
        this._cdr.markForCheck();
      })
    );
    this._focusMonitor.monitor(this.elementGitHub).subscribe((origin) =>
      this._ngZone.run(() => {
        this._cdr.markForCheck();
      })
    );
    this._focusMonitor.monitor(this.elementBlog).subscribe((origin) =>
      this._ngZone.run(() => {
        this._cdr.markForCheck();
      })
    );
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this.elementButton);
    this._focusMonitor.stopMonitoring(this.elementGitHub);
    this._focusMonitor.stopMonitoring(this.elementBlog);
  }

  navToRepoGrid(): void {
    this.router.navigate(["/repositories/repositories-grid"]);
  }
}
