import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatTableModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatTableModule, MatToolbarModule, MatIconModule],
})
export class MaterialModule {}
