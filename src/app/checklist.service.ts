import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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

  constructor() {
    const loadedCurrentChecklist = localStorage.getItem(currentChecklistId);
    if (loadedCurrentChecklist) {
      const checkedItems =
        JSON.parse(loadedCurrentChecklist)
        .map(id => +id);
      this.checkedItems$.next(checkedItems);
    }

    const loadedSavedLists = localStorage.getItem('savedLists');
    if (loadedSavedLists) {
      const savedLists = JSON.parse(loadedSavedLists)
        .map(l => l.checkedItems = l.checkedItems.map(id => +id));
      this.savedLists$.next(savedLists);
    }

    // Subscribe to our changes and write them to local storage
    this.checkedItems$.subscribe(checkedItems => {
      localStorage.setItem(currentChecklistId, JSON.stringify(checkedItems));
    });

    this.savedLists$.subscribe(savedLists => {
      localStorage.setItem('savedLists', JSON.stringify(savedLists));
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

  public setCheckedItems(ids: number[]): void {
    const checkedItems = [...ids];
    this.checkedItems$.next(checkedItems);
  }

  public saveCurrentList(name: string): void {
    const now = new Date();
    const dateString = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    const checkedCount = this.checkedItems$.getValue().length;
    const defaultName = `${dateString} (${checkedCount}/122)`;
    const listName = name ? name : defaultName;

    const currentList: SavedList = {name: name, checkedItems: this.checkedItems$.getValue()};
    const savedLists = [...this.savedLists$.getValue(), currentList];
    this.savedLists$.next(savedLists);
  }

  public saveList(list: SavedList): void {
    const savedLists = [...this.savedLists$.getValue(), list];
    this.savedLists$.next(savedLists);
  }

}
