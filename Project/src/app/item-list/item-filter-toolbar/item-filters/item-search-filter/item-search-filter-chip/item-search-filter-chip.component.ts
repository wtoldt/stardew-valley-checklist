import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemSearchFilter, initialItemFilters } from '../..';

@Component({
  selector: 'app-item-search-filter-chip',
  template: `
    <mat-chip
        *ngIf="showHideChecked()"
        [selected]="'true'"
        (removed)="removeHideChecked()"
        color="primary">
      Hide Checked
      <mat-icon matChipRemove>cancel</mat-icon>
    </mat-chip>
    <mat-chip
        *ngIf="showOther()"
        [selected]="'true'"
        (removed)="removeOther()"
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

  showHideChecked(): boolean {
    return this.itemSearchFilter.hideChecked !==
      this.blankSearchFilter.hideChecked;
  }

  showOther(): boolean {
    const foo =
      this.itemSearchFilter.nameString !== ''
      || this.itemSearchFilter.sourceString !== '';
    return foo;
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

  removeHideChecked(): void {
    this.itemSearchFilterClear.emit({
      ...this.itemSearchFilter,
      hideChecked: this.blankSearchFilter.hideChecked
    });
  }

  removeOther(): void {
    this.itemSearchFilterClear.emit({
      ...this.itemSearchFilter,
      nameString: this.blankSearchFilter.nameString,
      sourceString: this.blankSearchFilter.sourceString
    });
  }

}
