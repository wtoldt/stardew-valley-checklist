import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemSearchFilter, initialItemFilters } from '../..';

@Component({
  selector: 'app-item-search-filter-chip',
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
export class ItemSearchFilterChipComponent {
  @Input()
  private itemSearchFilter: ItemSearchFilter = initialItemFilters.searchFilter;
  @Output()
  private itemSearchFilterClear = new EventEmitter<ItemSearchFilter>();
  private blankSearchFilter = initialItemFilters.searchFilter;

  constructor() { }

  show() {
    return JSON.stringify(this.blankSearchFilter)
      !== JSON.stringify(this.itemSearchFilter);
  }
  content() {
    let content = '';
    if (this.itemSearchFilter.nameString !== this.blankSearchFilter.nameString) {
      content = content + `${this.itemSearchFilter.nameString} `;
    }
    if (this.itemSearchFilter.sourceString !== this.blankSearchFilter.sourceString) {
      content = content + `${this.itemSearchFilter.sourceString} `;
    }
    return content;
  }

  remove(): void {
    this.itemSearchFilterClear.emit(this.blankSearchFilter);
  }

}
