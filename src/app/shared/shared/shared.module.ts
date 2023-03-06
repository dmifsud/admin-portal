import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const materialModule = [
  MatCardModule,
    MatButtonModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialModule
  ],
  exports: [
    ...materialModule
  ]
})
export class SharedModule { }
