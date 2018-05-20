import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemBundleFilter, initialItemFilters } from '../..';
import { DataBase, db } from '../../../../../db';

@Component({
  selector: 'app-item-bundle-filter-chip',
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
export class ItemBundleFilterChipComponent {
  @Input()
  private itemBundleFilter: ItemBundleFilter = initialItemFilters.bundleFilter;
  @Output()
  private itemBundleFilterClear = new EventEmitter<ItemBundleFilter>();
  private blankBundleFilter = initialItemFilters.bundleFilter;

  constructor() { }

  show() {
    return JSON.stringify(this.blankBundleFilter)
      !== JSON.stringify(this.itemBundleFilter);
  }
  content() {
    let content = '';
    if (this.itemBundleFilter.selectedRoom !== this.blankBundleFilter.selectedRoom) {
      content = content + `${this.getRoomName(this.itemBundleFilter.selectedRoom)} `;
    }
    if (this.itemBundleFilter.selectedBundles !== []) {
      const selectedBundleNames = this.itemBundleFilter.selectedBundles
        .map(id => this.getBundleName(id));
      content = content + `${selectedBundleNames.join(' ')} `;
    }
    if (this.itemBundleFilter.containsAnyOnly !== this.blankBundleFilter.containsAnyOnly) {
      content = content + 'only ';
    }
    return content;
  }

  remove(): void {
    this.itemBundleFilterClear.emit(this.blankBundleFilter);
  }

  private getRoomName(roomId: number): string {
    return db.rooms.filter(r => r.id === roomId)[0].name;
  }

  private getBundleName(bundleId: number): string {
    return db.bundles.filter(b => b.id === bundleId)[0].name;
  }

}
