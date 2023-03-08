import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersBackendService } from './services/players.backend.service';
import { StoreModule } from '@ngrx/store';
import { playersReducers } from './reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { playersEffects } from './effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('players', playersReducers),
    EffectsModule.forFeature(playersEffects)
  ],
  providers: [
    PlayersBackendService
  ]
})
export class PlayersStoreModule { }
