import { Component, Input } from '@angular/core';

@Component({
    selector: 'crx-header',
    styleUrls: ['./header.scss'],
    templateUrl: './header.html'
})
export class HeaderComponent {

    @Input() pageTitle = '';

}
