import { Component } from '@angular/core';
import { ChecklistService, RoomCompletionStatus } from '../checklist.service';
import { FilterService } from '../filter.service';
import { LayoutService } from '../layout.service';

import { DataBase, db, roomMap } from '../db';
import { ItemBundleFilter, initialItemFilters } from '../item-list/item-filter-toolbar/item-filters';
import { BundleFilters, initialBundleFilters } from '../bundle-list/bundle-filter-toolbar/bundle-filters';
import { Observable, of, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styles: []
})
export class RoomListComponent {
  public db: DataBase = db;
  public roomCompletionMap$: Observable<Map<number, RoomCompletionStatus>>;

  constructor(
    private checklistService: ChecklistService,
    private filterService: FilterService,
    private layoutService: LayoutService
  ) {
    this.roomCompletionMap$ = checklistService.getRoomCompletionMap();
  }

  setItemFiltersToRoomItems(roomId: number): void {
    const itemBundleFilter: ItemBundleFilter = {
      ...initialItemFilters.bundleFilter,
      selectedRoom: roomId
    };
    const itemFilters = {
      ...initialItemFilters,
      bundleFilter: itemBundleFilter
    };
    this.filterService.setSelectedItemFilters(itemFilters);
    this.layoutService.goToItemTab();
  }

  setBundleFiltersToRoomBundles(roomId: number): void {
    const bundleFilters: BundleFilters = {
      ...initialBundleFilters,
      selectedRoom: roomId
    };
    this.filterService.setSelectedBundleFilters(bundleFilters);
    this.layoutService.goToBundleTab();
  }

}
