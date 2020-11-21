import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
} from 'ng-apexcharts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GridItem } from 'src/app/shared/entities/grid-item';
import { Contributor } from '../../shared/entities/contributor';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.scss']
})
export class RepositoryDetailComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  state$: Observable<any>;
  item: GridItem;
  contributors: Contributor[];
  contributions: number[];
  contributorNames: string[];


  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.state$ = this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    );

    this.state$.subscribe((s) => {
      this.item = s;
      this.contributors = s.contributor;
    });
    this.contributions = this.contributors.map((x) => x.contributions);
    this.contributorNames = this.contributors.map((x) => x.login);
    console.log('contributors', this.contributors);
    console.log('item', this.item);
    console.log('contributions', this.contributions);
    console.log('contributorNames', this.contributorNames);

    this.chartOptions = {
      series: [
        {
          name: 'contributions',
          data: this.contributions,
        },
      ],
      chart: {
        type: 'bar',
        height: 460,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: this.contributorNames,
      },
    };
  }

}
