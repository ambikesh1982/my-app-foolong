import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account-icon',
  template: `
    <a md-icon-button 
        routerLink="/profile" routerLinkActive="active" 
        mdTooltip="Account" mdTooltipShowDelay="1000">
        <md-icon>account_circle</md-icon>
    </a>
  `,
  styles: []
})
export class AccountIconComponent {}
