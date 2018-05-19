import { Injectable } from '@angular/core';

import { ItemFilters, initialItemFilters } from './item-list/item-filter-toolbar/item-filters';
import { BundleFilters, initialBundleFilters } from './bundle-list/bundle-filter-toolbar/bundle-filters';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private selectedItemFilters$ = new BehaviorSubject<ItemFilters>(initialItemFilters);
  private selectedBundleFilters$ = new BehaviorSubject<BundleFilters>(initialBundleFilters);

  constructor() { }

  public getSelectedItemFilters(): Observable<ItemFilters> {
    return this.selectedItemFilters$;
  }

  public setSelectedItemFilters(selectedItemFilters: ItemFilters): void {
    this.selectedItemFilters$.next(selectedItemFilters);
  }

  public getSelectedBundleFilters(): Observable<BundleFilters> {
    return this.selectedBundleFilters$;
  }

  public setSelectedBundleFilters(selectedBundleFilters: BundleFilters): void {
    this.selectedBundleFilters$.next(selectedBundleFilters);
  }
}
