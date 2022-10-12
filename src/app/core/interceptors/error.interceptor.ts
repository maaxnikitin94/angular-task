import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../../libs/notification/services/notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor (private notificationService: NotificationService) {
    }

    intercept (
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(catchError((requestError) => {

            this.notificationService.showError('Server error happened, Try again later', 3000);
            return throwError(() => new Error(requestError));

        }));

    }

}
