import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { loggedInUserEffects } from './effects';
import { loggedInUserReducers } from './reducers/index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('auth-user', loggedInUserReducers),
    EffectsModule.forFeature(loggedInUserEffects)
  ],
})
export class LoggedInUserStoreModule { }
