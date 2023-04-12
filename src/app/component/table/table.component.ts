import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { DataService } from 'src/app/service/data.service';
import { Data } from 'src/app/interface/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['construction', 'statecode', 'county', 'total'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource = new MatTableDataSource<Data>();
  csvRecords: Data[] = [];
  total: string = '';

  @ViewChild(MatSort, { static: false })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.onGetTableData();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onGetTableData() {
    this.dataService
      .getTableData()
      .pipe()
      .subscribe((response: string | any) => {
        // Refactoring csv data to json
        let lines = response.split('\n');
        // Heading for the data table
        let headers = lines[0].split(',');
        for (let i = 1; i < lines.length - 1; i++) {
          let line = lines[i];
          let row: { [index: string]: Data } = {};
          line.split(',').forEach((item: any, idx: number) => {
            row[headers[idx]] = item;
          });
          this.csvRecords.push(row);
        }
        // Adding column 1 and column 2
        const addColumns: any = () => {
          this.csvRecords.forEach((item) => {
            let c1: any = item.statecode;
            console.log(c1);
            let c2 = item.county;
            console.log(c2);
            this.total = c1 + c2;
          });
        };
        addColumns();
        this.dataSource.data = this.csvRecords;
      });
  }
}
