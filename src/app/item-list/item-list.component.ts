import { Component } from '@angular/core';

import { db, DataBase, Item, Season, Bundle } from '../db';
import { Observable, of, from, BehaviorSubject, Subject, combineLatest } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { MatSelectChange } from '@angular/material';
import { ItemFilters, initialItemFilters } from './item-filter-toolbar/item-filters';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  db: DataBase;
  filteredItems$: Observable<Item[]>;
  itemFilters$ = new BehaviorSubject<ItemFilters>(initialItemFilters);
  roomBundlesMap: any = {};

  constructor() {
    this.db = db;
    this.filteredItems$ = combineLatest(
      of(db.items),
      this.itemFilters$,
      (items, itemFilters) => this.itemsFilter(items, itemFilters)
    );

    db.rooms.forEach(r => this.roomBundlesMap[r.id] = []);
    db.bundles.forEach(b => this.roomBundlesMap[b.room].push(b.id));
  }

  getBundleName(id: number): string {
    return db.bundles.filter(i => i.id === id)[0].name;
  }

  onItemFiltersChange(itemFilters: ItemFilters): void {
    this.itemFilters$.next(itemFilters);
  }

  itemsFilter(items: Item[], itemFilters: ItemFilters): Item[] {
    let filteredItems = [...items];

    // Search Filter
    if (itemFilters.searchFilter.nameString.trim() !== '') {
      const nameString = itemFilters.searchFilter.nameString.toLowerCase();
      filteredItems = filteredItems
        .filter(i => i.name.toLowerCase().indexOf(nameString) > -1);
    }
    if (itemFilters.searchFilter.sourceString.trim() !== '') {
      const sourceString = itemFilters.searchFilter.sourceString.toLowerCase();
      filteredItems = filteredItems
        .filter(i => i.source.toLowerCase().indexOf(sourceString) > -1);
    }

    // Season Filter
    const selectedSeasons = itemFilters.seasonFilter.selectedSeasons;
    if (selectedSeasons.length > 0) {
      // And/Or
      if (itemFilters.seasonFilter.andOr) {
        filteredItems = filteredItems
          .filter(i => i.seasons.filter(s => this.contains(selectedSeasons, s)).length >= selectedSeasons.length);
      } else {
        filteredItems = filteredItems
          .filter(i => i.seasons.filter(s => this.contains(selectedSeasons, s)).length > 0);
      }
      // Contains Any.Only
      if (itemFilters.seasonFilter.containsAnyOnly) {
        filteredItems = filteredItems;
      } else {
        filteredItems = filteredItems
          .filter(i => JSON.stringify(i.seasons.sort()) === JSON.stringify(selectedSeasons.sort()));
      }
    }

    // Skill Filter
    const selectedSkills = itemFilters.skillFilter.selectedSkills;
    if (selectedSkills.length > 0) {
      // And/Or
      if (itemFilters.skillFilter.andOr) {
        filteredItems = filteredItems
          .filter(i => i.skills.filter(s => this.contains(selectedSkills, s)).length >= selectedSkills.length);
      } else {
        filteredItems = filteredItems
          .filter(i => i.skills.filter(s => this.contains(selectedSkills, s)).length > 0);
      }
      // Contains Any.Only
      if (itemFilters.skillFilter.containsAnyOnly) {
        filteredItems = filteredItems;
      } else {
        filteredItems = filteredItems
          .filter(i => JSON.stringify(i.skills.sort()) === JSON.stringify(selectedSkills.sort()));
      }
    }

    // Bundle Filter
    if (itemFilters.bundleFilter.selectedRoom !== undefined) {
      const roomBundles = this.roomBundlesMap[itemFilters.bundleFilter.selectedRoom];
      console.log(roomBundles);
      filteredItems = filteredItems
        .filter(i => i.bundles.filter(b => this.contains(roomBundles, b)).length > 0);
    }
    const selectedBundles = itemFilters.bundleFilter.selectedBundles;
    if (selectedBundles.length > 0) {
      // And/Or
      if (itemFilters.bundleFilter.andOr) {
        filteredItems = filteredItems
          .filter(i => i.bundles.filter(b => this.contains(selectedBundles, b)).length >= selectedBundles.length);
      } else {
        filteredItems = filteredItems
          .filter(i => i.bundles.filter(b => this.contains(selectedBundles, b)).length > 0);
      }
      // Contains Any.Only
      if (itemFilters.bundleFilter.containsAnyOnly) {
        filteredItems = filteredItems;
      } else {
        filteredItems = filteredItems
          .filter(i => JSON.stringify(i.bundles.sort()) === JSON.stringify(selectedBundles.sort()));
      }
    }

    return filteredItems;
  }

  contains (array: any[], item: any): boolean {
    return array.indexOf(item) > -1;
  }
}
