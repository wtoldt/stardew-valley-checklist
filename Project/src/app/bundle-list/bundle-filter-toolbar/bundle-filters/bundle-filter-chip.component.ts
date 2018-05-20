import { Component, Input, Output, EventEmitter } from '@angular/core';

import { DataBase, db } from '../../../db';
import { BundleFilters, initialBundleFilters } from '.';

@Component({
  selector: 'app-bundle-filter-chip',
  template: `
    <mat-chip
        *ngIf="show()"
        [selected]="'true'"
        (removed)="remove()"
        color="primary">
      {{ content() }}
      <mat-icon matChipRemove>cancel</mat-icon>
    </mat-chip>
  `,
  styles: []
})
export class BundleFilterChipComponent {
  @Input()
  private bundleFilters: BundleFilters = initialBundleFilters;
  @Output()
  private bundleFiltersClear = new EventEmitter<BundleFilters>();
  private blankBundleFilter = initialBundleFilters;

  constructor() { }

  show() {
    return JSON.stringify(this.blankBundleFilter)
      !== JSON.stringify(this.bundleFilters);
  }
  content() {
    let content = '';
    if (this.bundleFilters.nameSearchString !== this.blankBundleFilter.nameSearchString) {
      content = content + `${this.bundleFilters.nameSearchString} `;
    }
    if (this.bundleFilters.rewardSearchString !== this.blankBundleFilter.rewardSearchString) {
      content = content + `${this.bundleFilters.rewardSearchString} `;
    }
    if (this.bundleFilters.selectedRoom !== this.blankBundleFilter.selectedRoom) {
      content = content + `${this.getRoomName(this.bundleFilters.selectedRoom)} `;
    }
    return content;
  }

  remove(): void {
    this.bundleFiltersClear.emit(this.blankBundleFilter);
  }

  private getRoomName(roomId: number): string {
    return db.rooms.filter(r => r.id === roomId)[0].name;
  }

}
