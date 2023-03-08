import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players/players.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlayerDetailsComponent } from './players/player-details/player-details.component';



@NgModule({
  declarations: [
    PlayersComponent,
    PlayerDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PlayersModule { }
