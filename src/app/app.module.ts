import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './features/login/login.module';
import { PlayersModule } from './features/players/players.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
