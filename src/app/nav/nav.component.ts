import { Component, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, BehaviorSubject } from 'rxjs';
import { ChecklistService, SavedList, currentChecklistId } from '../checklist.service';
import { map, withLatestFrom, publishReplay } from 'rxjs/operators';
import { totalItems } from '../db';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @ViewChild('currentListName')
  public currentListName: ElementRef;
  @ViewChild('importName')
  public importName: ElementRef;
  @ViewChild('importCode')
  public importCode: ElementRef;
  public checkedItems$: Observable<number[]>;
  public checkedItemsCount$: Observable<number>;
  public checkedItemsPercent$: Observable<number>;
  public savedLists$: Observable<SavedList[]>;
  public savedListNames$: Observable<string[]>;
  public selectedListName: string;
  public currentChecklistId = currentChecklistId;
  public selectedSavedList: {name: string, exportString: string};
  public exportString = '';
  public totalItems = totalItems;
  public selectedTabIndex = 0;

  constructor(
      private breakpointObserver: BreakpointObserver,
      private checklistService: ChecklistService,
      public layoutService: LayoutService) {
    this.checkedItems$ = checklistService.getCheckedItems();
    this.checkedItemsCount$ = this.checkedItems$.pipe(
      map(i => i.length)
    );
    this.checkedItemsPercent$ = this.checkedItems$.pipe(
      map(i => +(i.length / totalItems * 100).toFixed(0))
    );
    this.savedLists$ = checklistService.getSavedLists();
    this.savedListNames$ = checklistService.getSavedLists().pipe(
      map(sl => sl.map(i => i.name))
    );

    layoutService.currentTab$.subscribe(index => this.selectedTabIndex = index);
  }

  public saveCurrentList(name: string): void {
    let listName = name.trim();
    if (listName === '') {
      listName = this.checklistService.generateDefaultName();
      this.currentListName.nativeElement.value = listName;
    }
    this.checklistService.saveCurrentList(listName);
    this.currentListName.nativeElement.blur();
  }

  public resetCheckedItems(): void {
    this.checklistService.resetCheckedItems();
  }

  public onSelectedListNameChange(value: string): void {
    this.selectedListName = value;
  }

  public import(): void {
    const importCode = this.importCode.nativeElement.value.trim();
    const importName = this.importName.nativeElement.value.trim();
    if (importCode) {
      const importedCheckedItems: number[] = importCode.split('-').map(s => +s);
      if (importName) {
        const importedSavedList: SavedList = {
          name: importName,
          checkedItems: importedCheckedItems
        };
        this.checklistService.saveList(importedSavedList);
        this.clearImportInputs();
      } else {
        this.checklistService.askToOverwriteCurrentList()
          .subscribe(result => {
            if (result === 'yes') {
              this.checklistService.setCheckedItems(importedCheckedItems);
              this.clearImportInputs();
            }
          });
      }
    }
  }

  public export(): void {
    if (this.selectedListName === currentChecklistId) {
      this.selectedSavedList = {
        name: `Current List at ${new Date().toTimeString()}`,
        exportString: this.checklistService.getCurrentCheckedItems()
          .toString().split(',').join('-')
      };
    } else {
      const savedList = this.checklistService.getSavedList(this.selectedListName);
      this.selectedSavedList = {
        name: savedList.name,
        exportString: savedList.checkedItems.toString().split(',').join('-')
      };
    }
    this.selectedListName = undefined;
  }

  public load(): void {
    this.checklistService.askToOverwriteCurrentList()
      .subscribe(result => {
        if (result === 'yes') {
          this.checklistService.setCheckedItems(
            this.checklistService.getSavedList(this.selectedListName).checkedItems
          );
          this.selectedListName = undefined;
        }
      });
  }

  public delete(): void {
    this.checklistService.deleteList(this.selectedListName);
    this.selectedListName = undefined;
  }

  private clearImportInputs(): void {
    this.importCode.nativeElement.value = '';
    this.importCode.nativeElement.blur();
    this.importName.nativeElement.value = '';
    this.importName.nativeElement.blur();
  }

}
