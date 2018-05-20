import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemSeasonFilter, initialItemFilters } from '../..';

@Component({
  selector: 'app-item-season-filter-chip',
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
export class ItemSeasonFilterChipComponent {
  @Input()
  private itemSeasonFilter: ItemSeasonFilter = initialItemFilters.seasonFilter;
  @Output()
  private itemSeasonFilterClear = new EventEmitter<ItemSeasonFilter>();
  private blankSeasonFilter = initialItemFilters.seasonFilter;

  constructor() { }

  show() {
    return JSON.stringify(this.blankSeasonFilter)
      !== JSON.stringify(this.itemSeasonFilter);
  }
  content() {
    let content = '';
    if (this.itemSeasonFilter.selectedSeasons !== []) {
      content = content + `${this.itemSeasonFilter.selectedSeasons.join(' ')} `;
    }
    if (this.itemSeasonFilter.containsAnyOnly !== this.blankSeasonFilter.containsAnyOnly) {
      content = content + 'only ';
    }
    return content;
  }

  remove(): void {
    this.itemSeasonFilterClear.emit(this.blankSeasonFilter);
  }

}
