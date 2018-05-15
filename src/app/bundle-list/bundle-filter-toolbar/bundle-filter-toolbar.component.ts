import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { BundleFilters } from './bundle-filters';
import { Bundle, Room, db } from '../../db';

@Component({
  selector: 'app-bundle-filter-toolbar',
  templateUrl: './bundle-filter-toolbar.component.html',
  styles: [
    '.example-spacer {flex: 1 1 auto;}',
    '.container {display: flex; box-sizing: border-box; width: 100%;}',
    '.search-input {width: 250px}'
  ]
})
export class BundleFilterToolbarComponent {
  @ViewChild('nameSearchInput')
  nameSearchInput: ElementRef;
  @ViewChild('rewardSearchInput')
  rewardSearchInput: ElementRef;
  @Input()
  public bundleFilters: BundleFilters;
  @Output()
  private bundleFiltersChange = new EventEmitter<BundleFilters>();
  public availableRooms: Room[] = db.rooms;

  constructor() { }

  onNameSearchEnter(event: {target: {value: string}}) {
    const newBundleFilters: BundleFilters = {...this.bundleFilters, nameSearchString: event.target.value};
    this.bundleFiltersChange.emit(newBundleFilters);
    this.nameSearchInput.nativeElement.blur();
  }

  onNameSearchClear() {
    this.nameSearchInput.nativeElement.value = '';
    const newBundleFilters: BundleFilters = {...this.bundleFilters, nameSearchString: ''};
    this.bundleFiltersChange.emit(newBundleFilters);
    this.nameSearchInput.nativeElement.blur();
  }

  onRewardSearchEnter(event: {target: {value: string}}) {
    const newBundleFilters: BundleFilters = {...this.bundleFilters, rewardSearchString: event.target.value};
    this.bundleFiltersChange.emit(newBundleFilters);
    this.rewardSearchInput.nativeElement.blur();
  }

  onRewardSearchClear() {
    this.rewardSearchInput.nativeElement.value = '';
    const newBundleFilters: BundleFilters = {...this.bundleFilters, rewardSearchString: ''};
    this.bundleFiltersChange.emit(newBundleFilters);
    this.rewardSearchInput.nativeElement.blur();
  }

  onSelectedRoomChange(selection: number): void {
    const newBundleFilters = {...this.bundleFilters, selectedRoom: selection};
    this.bundleFiltersChange.emit(newBundleFilters);
  }
}
