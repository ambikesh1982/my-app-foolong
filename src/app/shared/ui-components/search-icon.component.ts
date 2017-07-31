import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-icon',
  template: `
    <a md-fab
      routerLink="/search" routerLinkActive="active">
      <md-icon>search</md-icon>
    </a>
  `,
  styles: []
})
export class SearchIconComponent {}
