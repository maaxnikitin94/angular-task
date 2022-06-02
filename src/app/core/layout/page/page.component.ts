import { Component, Input } from '@angular/core';

@Component({
    selector: 'crx-page',
    styleUrls: ['./page.scss'],
    templateUrl: './page.html'
})
export class PageComponent {

    @Input() showBackground: boolean;

}
