import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RANGES } from './screen.constants';

@Injectable({ providedIn: 'root' })
export class ScreenService {

    isLaptop$: Observable<boolean>;
    isLaptopDown$: Observable<boolean>;
    isLaptopUp$: Observable<boolean>;
    isLg$: Observable<boolean>;
    isMd$: Observable<boolean>;
    isMobile$: Observable<boolean>;
    isSm$: Observable<boolean>;
    isTablet$: Observable<boolean>;
    isTabletLandscapeDown$: Observable<boolean>;
    isTabletPortrait$: Observable<boolean>;
    isTabletPortraitDown$: Observable<boolean>;
    isXs$: Observable<boolean>;

    get isLaptop (): boolean {

        return this.isMatched(RANGES.laptop);

    }

    get isLaptopDown (): boolean {

        return this.isMatched(RANGES.laptopDown);

    }

    get isLaptopUp (): boolean {

        return this.isMatched(RANGES.laptopUp);

    }

    get isLg (): boolean {

        return this.isMatched(RANGES.large);

    }

    get isMd (): boolean {

        return this.isMatched(RANGES.medium);

    }

    get isMobile (): boolean {

        return this.isMatched(RANGES.mobile);

    }

    get isSm (): boolean {

        return this.isMatched(RANGES.small);

    }

    get isTablet (): boolean {

        return this.isMatched(RANGES.tablet);

    }

    get isTabletLandscapeDown (): boolean {

        return this.isMatched(RANGES.tabletLandscapeDown);

    }

    get isTabletPortrait (): boolean {

        return this.isMatched(RANGES.tabletPortrait);

    }

    get isTabletPortraitDown (): boolean {

        return this.isMatched(RANGES.tabletPortraitDown);

    }

    get isXs (): boolean {

        return this.isMatched(RANGES.extraSmall);

    }

    private isMatched (breakpoint: string): boolean {

        return this.breakpointObserver.isMatched(breakpoint);

    }

    private observe$ (breakpoint: string): Observable<boolean> {

        return this.breakpointObserver.observe(breakpoint).pipe(
            map((state: BreakpointState) => state.matches),
            shareReplay()
        );

    }

    constructor (public breakpointObserver: BreakpointObserver) {

        // Observers should be created once to allow usage with async pipe
        this.isXs$ = this.observe$(RANGES.extraSmall);
        this.isLaptop$ = this.observe$(RANGES.laptop);
        this.isLaptopDown$ = this.observe$(RANGES.laptopDown);
        this.isLaptopUp$ = this.observe$(RANGES.laptopUp);
        this.isLg$ = this.observe$(RANGES.large);
        this.isMd$ = this.observe$(RANGES.medium);
        this.isMobile$ = this.observe$(RANGES.mobile);
        this.isSm$ = this.observe$(RANGES.small);
        this.isTablet$ = this.observe$(RANGES.tablet);
        this.isTabletLandscapeDown$ = this.observe$(RANGES.tabletLandscapeDown);
        this.isTabletPortrait$ = this.observe$(RANGES.tabletPortrait);
        this.isTabletPortraitDown$ = this.observe$(RANGES.tabletPortraitDown);

    }

    isBetween (from: number, to: number): boolean {

        return this.isMatched(`(min-width: ${from}px) and (max-width: ${to}px)`);

    }

    isBetween$ (from: number, to: number): Observable<boolean> {

        return this.observe$(`(min-width: ${from}px) and (max-width: ${to}px)`);

    }

}
