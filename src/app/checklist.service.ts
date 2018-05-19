import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { YesNoDialogComponent } from './yes-no-dialog/yes-no-dialog.component';
import { map } from 'rxjs/operators';
import { db, bundleItemMap, bundleMap } from './db';

export interface SavedList {
  name: string;
  checkedItems: number[];
}
export interface BundleCompletionStatus {
  id: number;
  complete: boolean;
  checkedItems: number;
}
export interface RoomCompletionStatus {
  id: number;
  complete: boolean;
  requiredBundles: number;
  checkedBundles: number;
}
export interface SeasonCompletionStatus {
  id: string;
  complete: boolean;
  requiredItems: number;
  checkedItems: number;
}
export interface SkillCompletionStatus {
  id: string;
  complete: boolean;
  requiredItems: number;
  checkedItems: number;
}
export const currentChecklistId = '28c8cdb62903833cfe9f7d6f4c9bc8e9';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {
  private checkedItems$ = new BehaviorSubject<number[]>([]);
  private savedLists$ = new BehaviorSubject<SavedList[]>([]);
  private bundleCompletionMap$: Observable<Map<number, BundleCompletionStatus>>;
  private roomCompletionMap$: Observable<Map<number, RoomCompletionStatus>>;
  private seasonCompletionMap$: Observable<Map<string, SeasonCompletionStatus>>;
  private skillCompletionMap$: Observable<Map<string, SkillCompletionStatus>>;

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

    this.bundleCompletionMap$ = this.checkedItems$.pipe(
      map(items => {
        return db.bundles.map(b => {
          const bundleItemIds = bundleItemMap.get(b.id).map(i => i.id);
          const checkedItems = items
            .filter(i => bundleItemIds.includes(i)).length;
          return {
            id: b.id,
            complete: checkedItems >= b.items_required,
            checkedItems: checkedItems
          };
        }).reduce((accum, curVal) => {
          return accum.set(curVal.id, curVal);
        }, new Map<number, BundleCompletionStatus>());
      })
    );

    this.roomCompletionMap$ = this.bundleCompletionMap$.pipe(
      map(bcm => {
        return db.rooms.map(r => {
          const requiredBundles = db.bundles.filter(b => b.room === r.id);
          const bundlesCompleted = requiredBundles.filter(b => bcm.get(b.id).complete).length;
          return {
            id: r.id,
            complete: bundlesCompleted >= requiredBundles.length,
            requiredBundles: requiredBundles.length,
            checkedBundles: bundlesCompleted
          };
        }).reduce((accum, curVal) => {
          return accum.set(curVal.id, curVal);
        }, new Map<number, RoomCompletionStatus>());
      })
    );

    this.seasonCompletionMap$ = this.checkedItems$.pipe(
      map(items => {
        return db.seasons.map(s => {
          const requiredItems = db.items.filter(i => i.seasons.includes(s.id));
          const checkedItems = requiredItems.filter(i => items.includes(i.id)).length;
          return {
            id: s.id,
            complete: checkedItems >= requiredItems.length,
            requiredItems: requiredItems.length,
            checkedItems
          };
        }).reduce((accum, curVal) => {
          return accum.set(curVal.id, curVal);
        }, new Map<string, SeasonCompletionStatus>());
      })
    );

    this.skillCompletionMap$ = this.checkedItems$.pipe(
      map(items => {
        return db.skills.map(s => {
          const requiredItems = db.items.filter(i => i.skills.includes(s.id));
          const checkedItems = requiredItems.filter(i => items.includes(i.id)).length;
          return {
            id: s.id,
            complete: checkedItems >= requiredItems.length,
            requiredItems: requiredItems.length,
            checkedItems
          };
        }).reduce((accum, curVal) => {
          return accum.set(curVal.id, curVal);
        }, new Map<string, SeasonCompletionStatus>());
      })
    );

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

  public getBundleCompletionMap(): Observable<Map<number, BundleCompletionStatus>> {
    return this.bundleCompletionMap$;
  }

  public getRoomCompletionMap(): Observable<Map<number, RoomCompletionStatus>> {
    return this.roomCompletionMap$;
  }

  public getSeasonCompletionMap(): Observable<Map<string, SeasonCompletionStatus>> {
    return this.seasonCompletionMap$;
  }

  public getSkillCompletionMap(): Observable<Map<string, SkillCompletionStatus>> {
    return this.skillCompletionMap$;
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
