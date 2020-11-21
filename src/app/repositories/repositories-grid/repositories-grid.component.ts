import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { faCheck, faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { GridItem } from '../../shared/entities/grid-item';
import {
  GridDisplayedColumns,
  gridDisplayedColumns,
} from '../../shared/entities/grid-displayed-columns';
import { RepositoriesGridService } from '../../core/services/repositories-grid.service';
import { compareFullName } from '../../shared/utilities/compareFullName';
import { compareDate } from '../../shared/utilities/compareDate';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-repositories-grid',
  templateUrl: './repositories-grid.component.html',
  styleUrls: ['./repositories-grid.component.scss'],
})
export class RepositoriesGridComponent implements OnInit, AfterViewInit {
  faCheck = faCheck;
  faTimes = faTimes;
  faStar = faStar;
  list: GridItem[] = [];
  dataSource = new MatTableDataSource<GridItem>([]);
  Columns = gridDisplayedColumns;
  filter = {
    showTrue: true,
    showFalse: true,
  };


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    // repositoriesGridService: RepositoriesGridService,
    private router: Router,
    private route: ActivatedRoute
  ) {
      const resolvedGridData: GridItem[] = this.route.snapshot.data[
      // tslint:disable-next-line:no-string-literal
      'resolvedGridData'
    ];
      this.list = resolvedGridData;
      this.dataSource = new MatTableDataSource<GridItem>(this.list);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.sort, this.paginator);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.sort, this.paginator);
  }

  get displayedColumns(): unknown[] {
    return this.Columns.filter((r) => r.selected).map((r) => r.name);
  }

  changeDisplayColumns(evt: GridDisplayedColumns): void {
    this.Columns = this.Columns.map((r) => {
      return {
        ...r,
        selected: r.name === evt.name ? evt.selected : r.selected,
      };
    });
  }

  changeFilter(evt: any): void {
    this.filter.showTrue = evt.showTrue;
    this.filter.showFalse = evt.showFalse;
    this.generateDataSource();
  }

  generateDataSource(fn?): void {
    const data = this.list.filter((r) => {
      if (this.filter.showTrue && r.fork) {
        return true;
      }
      if (this.filter.showFalse && !r.fork) {
        return true;
      }
      return false;
    });
    if (fn) {
      fn(data);
    }
    this.dataSource = new MatTableDataSource<GridItem>(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  sortData(sort: Sort): void {
    console.log(':::', sort);
    const data = this.list.slice();
    if (!sort.active || sort.direction === '') {
      this.list = data;
      return;
    }

    this.generateDataSource((list) => {
      return  list.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Name':
          return compareFullName(a.full_name, b.full_name, isAsc);
        case 'Created time':
          return compareDate(a.created_at, b.created_at, isAsc);
        case 'Updated time':
          return compareDate(a.updated_at, b.updated_at, isAsc);
        default:
          return 0;
      }
      });
    });
}

  navigateToRepository(row): void {
    console.log(row);
    this.router.navigate([`/repositories/${row.name}`], { state: row });
  }
}
