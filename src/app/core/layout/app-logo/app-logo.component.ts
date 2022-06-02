import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'crx-app-logo',
    styleUrls: ['./app-logo.scss'],
    templateUrl: './app-logo.html'
})
export class AppLogoComponent implements OnInit {

    @Input() newTab?: boolean;
    @Input() white?: boolean;

    @Output() logoClick$ = new EventEmitter<void>();

    hasHandler: boolean;
    logoUrl = '/content/img/CREXi-logo-black.svg';
    target = '_self';

    ngOnInit () {

        this.hasHandler = this.logoClick$.observers.length > 0;
        if (this.white) {

            this.logoUrl = '/content/img/CREXi-logo-white.svg';

        }

        if (this.newTab) {

            this.target = '_blank';

        }

    }

    logoClick () {

        if (this.hasHandler) {

            this.logoClick$.emit();
            return false;

        }

    }

}
