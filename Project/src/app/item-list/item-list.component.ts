import { Component, Input} from '@angular/core';

import { MatDialog, PageEvent } from '@angular/material';
import { YesNoDialogComponent } from '../yes-no-dialog/yes-no-dialog.component';
import { db, DataBase, Item, Season, Bundle, Room, bundleMap, roomMap } from '../db';
import { Observable, of, BehaviorSubject, combineLatest } from 'rxjs';
import { take, tap, map } from 'rxjs/operators';
import { ItemFilters } from './item-filter-toolbar/item-filters';
import { ChecklistService } from '../checklist.service';
import { FilterService } from '../filter.service';
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
  db: DataBase = db;
  filteredItems$: Observable<Item[]>;
  itemFilters$: Observable<ItemFilters>;
  bundleMap: Map<number, Bundle> = bundleMap;
  roomMap: Map<number, Room> = roomMap;
  private filteredItemsSnapshot: Item[] = [];

  constructor(
        private checklistService: ChecklistService,
        private filterService: FilterService,
        public dialog: MatDialog) {

    this.itemFilters$ = filterService.getSelectedItemFilters();
    const filteredList = combineLatest(of(db.items), this.itemFilters$).pipe(
      map(([items, itemFilters]) => this.itemsFilter(items, itemFilters)),
      tap(fl => this.resultCount$.next(fl.length)),
      tap(fl => this.filteredItemsSnapshot = fl)
    );
    this.filteredItems$ = combineLatest(filteredList, this.pageIndex$, this.pageSize$).pipe(
      map(([ar, i, s]) => ar.slice(i * s, (i * s) + s))
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
    this.filterService.setSelectedItemFilters(itemFilters);
  }

  checkFilteredItems(): void {
    const ids = this.filteredItemsSnapshot.map(i => i.id);
    if (ids.length >= 10) {
      this.askToCheckAll().pipe(take(1)).subscribe(result => {
        if (result === 'yes') {
          this.checklistService.checkItems(ids);
        }
      });
    } else {
      this.checklistService.checkItems(ids);
    }
  }

  unCheckFilteredItems(): void {
    const ids = this.filteredItemsSnapshot.map(i => i.id);
    if (ids.length >= 10) {
      this.askToUnCheckAll().pipe(take(1)).subscribe(result => {
        if (result === 'yes') {
          this.checklistService.unCheckItems(ids);
        }
      });
    } else {
      this.checklistService.unCheckItems(ids);
    }
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
    if (itemFilters.searchFilter.hideChecked) {
      filteredItems = filteredItems
        .filter(i => !this.isChecked(i.id));
    }
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
          .filter(i => i.seasons.filter(s => selectedSeasons.includes(s)).length >= selectedSeasons.length);
      } else {
        filteredItems = filteredItems
          .filter(i => i.seasons.filter(s => selectedSeasons.includes(s)).length > 0);
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
          .filter(i => i.skills.filter(s => selectedSkills.includes(s)).length >= selectedSkills.length);
      } else {
        filteredItems = filteredItems
          .filter(i => i.skills.filter(s => selectedSkills.includes(s)).length > 0);
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
        .filter(i => i.bundles.filter(b => roomBundleIds.includes(b)).length > 0);
    }
    const selectedBundles = itemFilters.bundleFilter.selectedBundles;
    if (selectedBundles.length > 0) {
      // And/Or
      if (itemFilters.bundleFilter.andOr) {
        filteredItems = filteredItems
          .filter(i => i.bundles.filter(b =>  selectedBundles.includes(b)).length >= selectedBundles.length);
      } else {
        filteredItems = filteredItems
          .filter(i => i.bundles.filter(b => selectedBundles.includes(b)).length > 0);
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

  private askToCheckAll(): Observable<any> {
    return this.askToCheck(
      'You\'re checking a lot of items, this cannot be undone. Are you okay with that?'
    );
  }

  private askToUnCheckAll(): Observable<any> {
    return this.askToCheck(
      'You\'re unchecking a lot of items, this cannot be undone. Are you okay with that?'
    );
  }

  private askToCheck(dialog: string): Observable<any> {
    return this.dialog.open(YesNoDialogComponent, {
      width: '250px',
      data: { dialog }
    }).afterClosed();
  }
}
