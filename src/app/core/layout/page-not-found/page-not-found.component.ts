import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'crx-page-not-found',
    styleUrls: ['./page-not-found.scss'],
    templateUrl: './page-not-found.html'
})
export class PageNotFoundComponent implements OnDestroy, OnInit {

    @Input() pageContent = `We’re sorry, but the page you are looking for doesn't exist. Try these links…`;
    @Input() pageTitle = 'Error 404';

    ngOnDestroy () {

        document.body.classList.add('no-background');

    }

    ngOnInit () {

        document.body.classList.remove('no-background');

    }

}
