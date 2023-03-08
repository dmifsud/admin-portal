import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { MainContainerCardComponent } from './components/main-container/main-container-card/main-container-card.component';

const materialModule = [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule
];

@NgModule({
  declarations: [
    MainContainerComponent,
    MainContainerCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ...materialModule
  ],
  exports: [
    ...materialModule,

    MainContainerComponent,
    MainContainerCardComponent
  ]
})
export class SharedModule { }
