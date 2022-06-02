import { Component } from '@angular/core';

@Component({
    selector: 'crx-footer',
    styleUrls: ['./footer.scss'],
    templateUrl: './footer.html'
})
export class FooterComponent {

    date: Date = new Date();
    facebookUri = '//www.facebook.com/CREXinc/';
    gramUri = '//www.instagram.com/crexi_cre/';
    linkedInUri = '//www.linkedin.com/company/commercial-real-estate-exchange-inc-/';
    twitterUri = '//twitter.com/CREXinc';

}
