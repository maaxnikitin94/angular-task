import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationService } from '@features/notification/services/notification.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor (private notificationService: NotificationService) {
    }

    intercept (
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(catchError((requestError) => {

            this.notificationService.error('Server error happened, Try again later', 5000);
            return throwError(() => new Error(requestError));

        }));

    }

}
