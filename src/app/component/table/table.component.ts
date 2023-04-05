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
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource();
  results: any;
  @ViewChild(MatSort, { static: false })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  csvRecords: Data[] = [];

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
        let lines = response.split('\n');
        // console.log('Lines value is: ' + lines);
        let headers = lines[0].split(',');
        // console.log('headers value is: ' + headers);
        let results: any[] = [];
        for (let i = 1; i < lines.length; i++) {
          let line = lines[i];
          let row: { [index: string]: Data } = {};
          line.split(',').forEach((item: any, idx: number) => {
            row[headers[idx]] = item;
          });
          results.push(row);
        }
        console.log(results);
        console.log(results[0]);
        this.dataSource.data = results;
      });
  }
}
