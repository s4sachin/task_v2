import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
  ],
})
export class MaterialModule {}
