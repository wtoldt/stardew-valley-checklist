import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { YesNoDialogComponent } from './yes-no-dialog/yes-no-dialog.component';
import { map } from 'rxjs/operators';

export interface SavedList {
  name: string;
  checkedItems: number[];
}
export const currentChecklistId = '28c8cdb62903833cfe9f7d6f4c9bc8e9';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {
  private checkedItems$ = new BehaviorSubject<number[]>([]);
  private savedLists$ = new BehaviorSubject<SavedList[]>([]);

  constructor(public dialog: MatDialog) {
    // Load current & saved lists
    const loadedCurrentChecklist = localStorage.getItem(currentChecklistId);
    if (loadedCurrentChecklist) {
      const checkedItems =
        JSON.parse(loadedCurrentChecklist)
        .map(id => +id);
      this.checkedItems$.next(checkedItems);
    }

    const loadedSavedLists = localStorage.getItem('savedLists');
    if (loadedSavedLists) {
      this.savedLists$.next(JSON.parse(loadedSavedLists));
    }

    // Subscribe to our changes and write them to local storage
    this.checkedItems$.subscribe(checkedItems => {
      localStorage.setItem(currentChecklistId, JSON.stringify(checkedItems));
    });

    this.savedLists$.subscribe(savedLists => {
      const stringifiedSavedLists = JSON.stringify(savedLists);
      localStorage.setItem('savedLists', stringifiedSavedLists);
    });
  }

  public getCheckedItems(): Observable<number[]> {
    return this.checkedItems$;
  }

  public getCurrentCheckedItems(): number[] {
    return this.checkedItems$.getValue();
  }

  public getSavedLists(): Observable<SavedList[]> {
    return this.savedLists$;
  }

  public getSavedList(name: string): SavedList {
    return this.savedLists$.getValue()
      .filter(l => l.name === name)[0];
  }

  public resetCheckedItems(): void {
    this.checkedItems$.next([]);
  }

  public checkItem(id: number): void {
    const checkedItems = [...this.checkedItems$.getValue(), id];
    this.checkedItems$.next(checkedItems);
  }

  public unCheckItem(id: number): void {
    const checkedItems = this.checkedItems$.getValue()
      .filter(i => i !== id);
    this.checkedItems$.next(checkedItems);
  }

  public checkItems(ids: number[]): void {
    const checkedItems = [...this.checkedItems$.getValue(), ...ids];
    this.checkedItems$.next(checkedItems);
  }

  public unCheckItems(ids: number[]): void {
    const checkedItems = this.checkedItems$.getValue()
      .filter(i => !ids.includes(i));
    this.checkedItems$.next(checkedItems);
  }

  public setCheckedItems(ids: number[]): void {
    const checkedItems = [...ids];
    this.checkedItems$.next(checkedItems);
  }

  public saveCurrentList(name: string): void {
    const savedList = {
      name,
      checkedItems: this.checkedItems$.getValue()
    };
    this.saveList(savedList);
  }

  public saveList(savedList: SavedList): void {
    // Check if the name already exists
    const isUnique = this.savedLists$.getValue()
      .map(sl => sl.name)
      .filter(n => n === savedList.name)
      .length === 0;
    if (isUnique) {
      const savedLists = [...this.savedLists$.getValue(), savedList];
      this.savedLists$.next(savedLists);
    } else {
      this.askToOverwriteSave().subscribe(result => {
        if (result === 'yes') {
          this.overwriteSavedList(savedList);
        }
      });
    }
  }

  public deleteList(name: string): void {
    this.askToDeleteSave().subscribe(result => {
      if (result === 'yes') {
        const filteredSavedLists = this.savedLists$.getValue()
          .filter(sl => sl.name !== name);
        this.savedLists$.next(filteredSavedLists);
      }
    });
  }

  public askToOverwriteSave(): Observable<any> {
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      width: '250px',
      data: { dialog: 'A save by this name already exists, do you want to overwrite?'}
    });
    return dialogRef.afterClosed();
  }

  public askToOverwriteCurrentList(): Observable<any> {
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      width: '250px',
      data: { dialog: 'This will overwrite your current items, is that okay?'}
    });
    return dialogRef.afterClosed();
  }

  public generateDefaultName(): string {
    const dateString = new Date().toISOString().substring(0, 10);
    const checkedItemsCount = this.checkedItems$.getValue().length;
    return `${dateString}`;
  }

  private overwriteSavedList(savedList: SavedList): void {
    const savedLists = this.savedLists$.getValue()
      .filter(sl => sl.name !== savedList.name);
    this.savedLists$.next([...savedLists, savedList]);
  }

  private askToDeleteSave(): Observable<any> {
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      width: '250px',
      data: { dialog: 'This will delete the save, are you sure?'}
    });
    return dialogRef.afterClosed();
  }

}
