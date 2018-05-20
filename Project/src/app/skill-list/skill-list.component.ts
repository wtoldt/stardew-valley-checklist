import { Component } from '@angular/core';
import { DataBase, db, roomMap } from '../db';
import { ItemSeasonFilter, initialItemFilters, ItemSkillFilter } from '../item-list/item-filter-toolbar/item-filters';
import { ChecklistService, SeasonCompletionStatus, SkillCompletionStatus } from '../checklist.service';
import { FilterService } from '../filter.service';
import { LayoutService } from '../layout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styles: []
})
export class SkillListComponent {
  public db: DataBase = db;
  public skillCompletionMap$: Observable<Map<string, SkillCompletionStatus>>;

  constructor(
    private checklistService: ChecklistService,
    private filterService: FilterService,
    private layoutService: LayoutService
  ) {
    this.skillCompletionMap$ = checklistService.getSkillCompletionMap();
  }

  setItemFiltersToSkillItems(skillId: string): void {
    const itemSkillFilter: ItemSkillFilter = {
      ...initialItemFilters.skillFilter,
      selectedSkills: [skillId]
    };
    const itemFilters = {
      ...initialItemFilters,
      skillFilter: itemSkillFilter
    };
    this.filterService.setSelectedItemFilters(itemFilters);
    this.layoutService.goToItemTab();
  }
}
