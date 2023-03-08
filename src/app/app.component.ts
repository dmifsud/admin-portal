import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './shared/services/auth.service';
import { AuthHelper } from './helpers/auth.helper';
import { AuthFacade } from './store/logged-in-user-store/services/auth.facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public loggedInUser$ = this.authFacade.loggedInUser$;
  
  constructor(
    private authFacade: AuthFacade
    ) {}

  public ngOnInit(): void {
    this.authFacade.hydrate();
  }
    
  public logout(): void {
    this.authFacade.logout();
  }
}