import { Component, } from '@angular/core';
import { db, DataBase, Item, Season, Bundle, Room, roomMap, bundleItemMap, bundleMap } from '../db';
import { Observable, of, BehaviorSubject, combineLatest } from 'rxjs';
import { BundleFilters, initialBundleFilters } from './bundle-filter-toolbar/bundle-filters';
import { FilterService } from '../filter.service';
import { LayoutService } from '../layout.service';
import { initialItemFilters, ItemBundleFilter } from '../item-list/item-filter-toolbar/item-filters';
import { ChecklistService, BundleCompletionStatus } from '../checklist.service';
import { reduce } from 'rxjs/operators';


@Component({
  selector: 'app-bundle-list',
  templateUrl: './bundle-list.component.html',
  styles: [
    '.example-spacer {flex: 1 1 auto;}',
    '.container {display: flex; box-sizing: border-box; width: 100%;}',
    '.search-input {width: 250px}'
  ]
})
export class BundleListComponent {
  private roomMap: Map<number, Room> = roomMap;
  public filteredBundles$: Observable<Bundle[]>;
  public bundleFilters$: Observable<BundleFilters>;
  public bundleCompletionMap$: Observable<Map<number, BundleCompletionStatus>>;

  constructor(
    private checklistService: ChecklistService,
    private filterService: FilterService,
    private layoutService: LayoutService
  ) {
    this.bundleFilters$ = filterService.getSelectedBundleFilters();
    this.filteredBundles$ = combineLatest(
      of(db.bundles),
      this.bundleFilters$,
      (bundles, filters) => this.bundleFilter(bundles, filters)
    );

    this.bundleCompletionMap$ = checklistService.getBundleCompletionMap();
  }

  getRoomName(roomId: number): string {
    return roomMap.get(roomId).name;
  }

  getBundleItems(bundleId: number): Item[] {
    return bundleItemMap.get(bundleId);
  }

  onBundleFiltersChange(bundleFilters: BundleFilters): void {
    this.filterService.setSelectedBundleFilters(bundleFilters);
  }

  setItemFiltersToBundleItems(bundleId: number): void {
    const itemBundleFilter: ItemBundleFilter = {
      ...initialItemFilters.bundleFilter,
      selectedBundles: [bundleId]
    };
    const itemFilters = {
      ...initialItemFilters,
      bundleFilter: itemBundleFilter
    };
    this.filterService.setSelectedItemFilters(itemFilters);
    this.layoutService.goToItemTab();
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
