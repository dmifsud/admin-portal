import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './features/login/login.module';
import { PlayersModule } from './features/players/players.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { PlayersStoreModule } from './store/players-store/players-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoggedInUserStoreModule } from './store/logged-in-user-store/logged-in-user-store.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // CUSTOM FEATURES
    LoginModule,
    PlayersModule,
    // ROUTES
    RouterModule.forRoot(
			routes
		),
    SharedModule,
    // STORE
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 40,
      logOnly: true, // TODO: improve by reading from a config file
      autoPause: true,
    }),
    PlayersStoreModule,
    LoggedInUserStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
