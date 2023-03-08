import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './shared/services/auth.service';
import { AuthHelper } from './helpers/auth.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-portal';

  
  constructor(
    private authService: AuthService
    ) {}

  public logout(): void {
    this.authService.logout();
  }
}