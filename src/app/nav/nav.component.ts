import { Component, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { ChecklistService, SavedList, currentChecklistId } from '../checklist.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @ViewChild('currentListName')
  public currentListName: ElementRef;
  public checkedItems$: Observable<number[]>;
  public checkedItemsCount$: Observable<number>;
  public checkedItemsPercent$: Observable<number>;
  public savedListNames$: Observable<string[]>;
  public selectedListName: string;
  public currentChecklistId = currentChecklistId;
  public selectedSavedList: SavedList;

  constructor(
      private breakpointObserver: BreakpointObserver,
      private checklistService: ChecklistService) {
    this.checkedItems$ = checklistService.getCheckedItems();
    this.checkedItemsCount$ = this.checkedItems$.pipe(
      map(i => i.length)
    );
    this.checkedItemsPercent$ = this.checkedItems$.pipe(
      map(i => +(i.length / 122 * 100).toFixed(0))
    );
    this.savedListNames$ = checklistService.getSavedLists().pipe(
      map(sl => sl.map(i => i.name))
    );
  }

  public saveCurrentList(name: string): void {
    //this.checklistService.saveCurrentList(name);
    this.currentListName.nativeElement.value = '';
    this.currentListName.nativeElement.blur();
  }

  public resetCheckedItems() {
    this.checklistService.resetCheckedItems();
  }

  public onSelectedListNameChange(value: string) {
    this.selectedListName = value;
  }

  public export() {
    if (this.selectedListName === currentChecklistId) {
      const now = new Date();
      const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
      this.selectedSavedList = {
        name: `Current List @ ${time}`,
        checkedItems: this.checklistService.getCurrentCheckedItems()
      };
    } else {
      this.selectedSavedList = this.checklistService.getSavedList(this.selectedListName);
    }
    this.selectedListName = undefined;
  }

  log(it) {
    console.log(it, Object.keys(it));
  }
}
