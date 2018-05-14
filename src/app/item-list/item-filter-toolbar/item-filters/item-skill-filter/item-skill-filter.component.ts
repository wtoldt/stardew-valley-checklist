import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ItemSkillFilter, andOrOptions, containsAnyOnlyOptions } from '..';
import { db, Skill } from '../../../../db';

@Component({
  selector: 'app-item-skill-filter',
  templateUrl: './item-skill-filter.component.html',
  styles: [
    '.example-spacer {flex: 1 1 auto;}',
    '.container {display: flex; box-sizing: border-box; width: 100%;}'
  ]
})
export class ItemSkillFilterComponent {

  @Input()
  public itemSkillFilter: ItemSkillFilter;
  @Output()
  private itemSkillFilterChange = new EventEmitter<ItemSkillFilter>();
  public availableSkills = db.skills;
  public andOrOptions = andOrOptions;
  public containsAnyOnlyOptions = containsAnyOnlyOptions;
  constructor() { }

  onSelectedSkillChange(selection: string[]): void {
    this.itemSkillFilterChange.emit({...this.itemSkillFilter, selectedSkills: selection});
  }

  onAndOrChange(andOr: boolean): void {
    this.itemSkillFilterChange.emit({...this.itemSkillFilter, andOr: andOr});
  }

  onContainsAnyOnlyChange(containsAnyOnly: boolean): void {
    this.itemSkillFilterChange.emit({...this.itemSkillFilter, containsAnyOnly: containsAnyOnly});
  }
}
