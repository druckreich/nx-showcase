import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatAnchor, MatButtonModule} from '@angular/material/button';
import {MatListItem, MatListModule, MatNavList} from '@angular/material/list';
import {
  MatDrawer,
  MatDrawerContainer, MatDrawerContent,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent, MatSidenavModule
} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [MatToolbar, MatSidenavModule, RouterOutlet, MatListModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'APP';
}
