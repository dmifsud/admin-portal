import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players/players.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    PlayersComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PlayersModule { }
