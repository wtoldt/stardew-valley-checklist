import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { ChecklistService, BundleCompletionStatus,
  RoomCompletionStatus, CompletionStatus } from './checklist.service';
import { bundleMap, roomMap } from './db';
import { MatSnackBar } from '@angular/material';
import { pairwise, map, throttleTime, skip, switchMap, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public currentTab$ = new BehaviorSubject<number>(0);
  private previousBundleCompletionMap: Map<number, BundleCompletionStatus>;

  constructor(
      private checklistService: ChecklistService,
      public snackBar: MatSnackBar) {
    checklistService.getBundleCompletionMap()
      .pipe(
        pairwise(),
        map(pair => {
          this.previousBundleCompletionMap = pair[0];
          return pair[1];
        })
      )
    .subscribe(completionMap => {
      completionMap.forEach((value, key) => {
        const previousValue = this.previousBundleCompletionMap.get(key);
        if (!previousValue.complete && value.complete) {
          const msg = `${bundleMap.get(key).name} Bundle Complete!`;
          this.snackBar.open(msg, '', {duration: 2000});
        }
      });
    });
  }

  public goToItemTab(): void {
    this.currentTab$.next(0);
  }

  public goToBundleTab(): void {
    this.currentTab$.next(1);
  }

}
