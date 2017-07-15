import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-icon',
  template: `
    <a md-icon-button 
        routerLink="/search" routerLinkActive="active" 
        mdTooltip="Search" mdTooltipShowDelay="1000">
        <md-icon>search</md-icon>
    </a>
  `,
  styles: []
})
export class SearchIconComponent {}
