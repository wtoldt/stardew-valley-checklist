import { Component } from '@angular/core';
import { DataBase, db, roomMap } from '../db';
import { ItemSeasonFilter, initialItemFilters } from '../item-list/item-filter-toolbar/item-filters';
import { ChecklistService, SeasonCompletionStatus } from '../checklist.service';
import { FilterService } from '../filter.service';
import { LayoutService } from '../layout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styles: []
})
export class SeasonListComponent {
  public db: DataBase = db;
  public seasonCompletionMap$: Observable<Map<string, SeasonCompletionStatus>>;

  constructor(
    private checklistService: ChecklistService,
    private filterService: FilterService,
    private layoutService: LayoutService
  ) {
    this.seasonCompletionMap$ = checklistService.getSeasonCompletionMap();
  }

  setItemFiltersToSeasonItems(seasonId: string): void {
    const itemSeasonFilter: ItemSeasonFilter = {
      ...initialItemFilters.seasonFilter,
      selectedSeasons: [seasonId]
    };
    const itemFilters = {
      ...initialItemFilters,
      seasonFilter: itemSeasonFilter
    };
    this.filterService.setSelectedItemFilters(itemFilters);
    this.layoutService.goToItemTab();
  }
}
