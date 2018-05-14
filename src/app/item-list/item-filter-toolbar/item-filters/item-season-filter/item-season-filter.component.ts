import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ItemSeasonFilter, andOrOptions, containsAnyOnlyOptions } from '..';
import { db, Season } from '../../../../db';

@Component({
  selector: 'app-item-season-filter',
  templateUrl: './item-season-filter.component.html',
  styles: [
    '.example-spacer {flex: 1 1 auto;}',
    '.container {display: flex; box-sizing: border-box; width: 100%;}'
  ]
})
export class ItemSeasonFilterComponent {

  @Input()
  public itemSeasonFilter: ItemSeasonFilter;
  @Output()
  private itemSeasonFilterChange = new EventEmitter<ItemSeasonFilter>();
  public availableSeasons: Season[];
  public andOrOptions = andOrOptions;
  public containsAnyOnlyOptions = containsAnyOnlyOptions;

  constructor() {
    this.availableSeasons = db.seasons
    .filter(s => s.id !== 'allseasons');
  }

  onSelectedSeasonChange(selection: string[]): void {
    this.itemSeasonFilterChange.emit({...this.itemSeasonFilter, selectedSeasons: selection});
  }

  onAndOrChange(andOr: boolean): void {
    this.itemSeasonFilterChange.emit({...this.itemSeasonFilter, andOr: andOr});
  }

  onContainsAnyOnlyChange(containsAnyOnly: boolean): void {
    this.itemSeasonFilterChange.emit({...this.itemSeasonFilter, containsAnyOnly: containsAnyOnly});
  }
}
