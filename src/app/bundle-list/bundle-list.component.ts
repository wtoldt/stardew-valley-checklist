import { Component, } from '@angular/core';
import { db, DataBase, Item, Season, Bundle, Room, roomMap } from '../db';
import { Observable, of, BehaviorSubject, combineLatest } from 'rxjs';
import { BundleFilters, initialBundleFilters } from './bundle-filter-toolbar/bundle-filters';
@Component({
  selector: 'app-bundle-list',
  templateUrl: './bundle-list.component.html',
  styles: []
})
export class BundleListComponent {
  private roomMap: Map<number, Room> = roomMap;
  public filteredBundles$: Observable<Bundle[]>;
  public bundleFilters$ = new BehaviorSubject<BundleFilters>(initialBundleFilters);
  constructor() {
    this.filteredBundles$ = combineLatest(
      of(db.bundles),
      this.bundleFilters$,
      (bundles, filters) => this.bundleFilter(bundles, filters)
    );
  }

  getRoomName(roomId: number): string {
    return roomMap.get(roomId).name;
  }

  onBundleFiltersChange(bundleFilters: BundleFilters): void {
    this.bundleFilters$.next(bundleFilters);
  }

  private bundleFilter(bundles: Bundle[], filters: BundleFilters): Bundle[] {
    let filteredBundles = [...bundles];

    if (filters.nameSearchString) {
      filteredBundles = filteredBundles
        .filter(b => b.name.toLowerCase().indexOf(filters.nameSearchString.toLowerCase()) > -1);
    }
    if (filters.rewardSearchString) {
      filteredBundles = filteredBundles
        .filter(b => b.reward.toLowerCase().indexOf(filters.rewardSearchString.toLowerCase()) > -1);
    }
    if (filters.selectedRoom !== undefined) {
      filteredBundles = filteredBundles
        .filter(b => b.room === filters.selectedRoom);
    }

    return filteredBundles;
  }

}
