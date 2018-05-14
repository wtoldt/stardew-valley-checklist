import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ItemBundleFilter, andOrOptions, containsAnyOnlyOptions } from '..';
import { db, Bundle, Room } from '../../../../db';


@Component({
  selector: 'app-item-bundle-filter',
  templateUrl: './item-bundle-filter.component.html',
  styles: [
    '.example-spacer {flex: 1 1 auto;}',
    '.container {display: flex; box-sizing: border-box; width: 100%;}'
  ]
})
export class ItemBundleFilterComponent {
  @Input()
  public itemBundleFilter: ItemBundleFilter;
  @Output()
  private itemBundleFilterChange = new EventEmitter<ItemBundleFilter>();
  public availableBundles: Bundle[] = db.bundles;
  public availableRooms: Room[] = db.rooms;
  public andOrOptions = andOrOptions;
  public containsAnyOnlyOptions = containsAnyOnlyOptions;

  constructor() {}

  onSelectedRoomChange(selection: number): void {
    const newItemBundleFilter = {...this.itemBundleFilter, selectedRoom: selection};
    this.itemBundleFilterChange.emit(newItemBundleFilter);
  }

  onSelectedBundleChange(selection: number[]): void {
    const newItemBundleFilter = {...this.itemBundleFilter, selectedBundles: selection};
    this.itemBundleFilterChange.emit(newItemBundleFilter);
  }

  onAndOrChange(andOr: boolean): void {
    const newItemBundleFilter = {...this.itemBundleFilter, andOr: andOr};
    this.itemBundleFilterChange.emit(newItemBundleFilter);
  }

  onContainsAnyOnlyChange(containsAnyOnly: boolean): void {
    const newItemBundleFilter = {...this.itemBundleFilter, containsAnyOnly: containsAnyOnly};
    this.itemBundleFilterChange.emit(newItemBundleFilter);
  }
}
