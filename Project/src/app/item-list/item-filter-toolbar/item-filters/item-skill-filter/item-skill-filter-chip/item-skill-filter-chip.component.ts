import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemSkillFilter, initialItemFilters } from '../..';

@Component({
  selector: 'app-item-skill-filter-chip',
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
export class ItemSkillFilterChipComponent {
  @Input()
  private itemSkillFilter: ItemSkillFilter = initialItemFilters.skillFilter;
  @Output()
  private itemSkillFilterClear = new EventEmitter<ItemSkillFilter>();
  private blankSkillFilter = initialItemFilters.skillFilter;

  constructor() { }

  show() {
    return JSON.stringify(this.blankSkillFilter)
      !== JSON.stringify(this.itemSkillFilter);
  }
  content() {
    let content = '';
    if (this.itemSkillFilter.selectedSkills !== []) {
      content = content + `${this.itemSkillFilter.selectedSkills.join(' ')} `;
    }
    if (this.itemSkillFilter.containsAnyOnly !== this.blankSkillFilter.containsAnyOnly) {
      content = content + 'only ';
    }
    return content;
  }

  remove(): void {
    this.itemSkillFilterClear.emit(this.blankSkillFilter);
  }

}
