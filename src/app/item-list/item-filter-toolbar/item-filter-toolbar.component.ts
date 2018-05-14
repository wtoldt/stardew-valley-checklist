import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ItemFilters, ItemSearchFilter, ItemSeasonFilter,
  ItemSkillFilter, ItemBundleFilter, initialItemFilters } from './item-filters';

@Component({
  selector: 'app-item-filter-toolbar',
  templateUrl: './item-filter-toolbar.component.html',
  styles: []
})
export class ItemFilterToolbarComponent {

  @Input()
  private itemFilters: ItemFilters;
  @Output()
  private itemFiltersChange = new EventEmitter<ItemFilters>();

  constructor() { }

  onItemSearchFilterChange(searchFilter: ItemSearchFilter) {
    const newItemFilters: ItemFilters = {...this.itemFilters, searchFilter: searchFilter};
    this.itemFiltersChange.emit(newItemFilters);
  }

  onItemSeasonFilterChange(seasonFilter: ItemSeasonFilter) {
    const newItemFilters: ItemFilters = {...this.itemFilters, seasonFilter: seasonFilter};
    this.itemFiltersChange.emit(newItemFilters);
  }

  onItemSkillFilterChange(skillFilter: ItemSkillFilter) {
    const newItemFilters: ItemFilters = {...this.itemFilters, skillFilter: skillFilter};
    this.itemFiltersChange.emit(newItemFilters);
  }

  onItemBundleFilterChange(bundleFilter: ItemBundleFilter) {
    const newItemFilters: ItemFilters = {...this.itemFilters, bundleFilter: bundleFilter};
    this.itemFiltersChange.emit(newItemFilters);
  }

  resetItemFilters(): void {
    this.itemFiltersChange.emit(initialItemFilters);
  }

}
