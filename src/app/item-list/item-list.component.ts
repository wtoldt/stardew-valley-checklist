import { Component, Input} from '@angular/core';

import { db, DataBase, Item, Season, Bundle, Room, bundleMap, roomMap } from '../db';
import { Observable, of, from, BehaviorSubject, Subject, combineLatest } from 'rxjs';
import { map, filter, scan, take, tap, combineLatest as co } from 'rxjs/operators';
import { MatSelectChange, PageEvent } from '@angular/material';
import { ItemFilters, initialItemFilters } from './item-filter-toolbar/item-filters';
import { ChecklistService } from '../checklist.service';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  @Input()
  checkedItems: number[];
  resultCount$ = new BehaviorSubject<number>(0);
  pageIndex$ = new BehaviorSubject<number>(0);
  pageSize$ = new BehaviorSubject<number>(15);
  db: DataBase;
  filteredItems$: Observable<Item[]>;
  itemFilters$ = new BehaviorSubject<ItemFilters>(initialItemFilters);
  bundleMap: Map<number, Bundle> = bundleMap;
  roomMap: Map<number, Room> = roomMap;

  constructor(private checklistService: ChecklistService) {
    this.db = db;
    const filteredList = combineLatest(
      of(db.items),
      this.itemFilters$,
      (items, itemFilters) => this.itemsFilter(items, itemFilters)
    ).pipe<Item[]>(
      tap(i => this.resultCount$.next(i.length))
    );
    this.filteredItems$ = combineLatest(
      filteredList,
      this.pageIndex$,
      this.pageSize$,
      (ar, i, s) => ar.slice(i * s, (i * s) + s)
    );

  }

  getBundleName(id: number): string {
    return this.bundleMap.get(id).name;
  }

  getRoomNames(bundleIds: number[]): Set<string> {
    return bundleIds.map(id => this.roomMap.get(this.bundleMap.get(id).room).name)
      .reduce((accum: Set<string>, name) => accum.add(name), new Set<string>());
  }

  onItemFiltersChange(itemFilters: ItemFilters): void {
    this.itemFilters$.next(itemFilters);
  }

  isChecked(id: number): boolean {
    return this.checkedItems ? this.checkedItems.includes(id) : false;
  }

  onCheckChange(itemId: number, event: any): void {
    if (event.checked) {
      this.checklistService.checkItem(itemId);
    } else {
      this.checklistService.unCheckItem(itemId);
    }
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex$.next(event.pageIndex);
    this.pageSize$.next(event.pageSize);
  }

  private itemsFilter(items: Item[], itemFilters: ItemFilters): Item[] {
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
      const selectedRoom = itemFilters.bundleFilter.selectedRoom;
      const roomBundleIds: number[] = db.bundles.filter(b => b.room === selectedRoom).map(b => b.id);
      filteredItems = filteredItems
        .filter(i => i.bundles.filter(b => this.contains(roomBundleIds, b)).length > 0);
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
