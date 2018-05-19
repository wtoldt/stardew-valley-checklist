import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public currentTab$ = new BehaviorSubject<number>(0);

  constructor() { }

  public goToItemTab(): void {
    this.currentTab$.next(0);
  }
}
