import { Component, } from '@angular/core';
import { db, DataBase, Item, Season, Bundle, Room, roomMap } from '../db';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-bundle-list',
  templateUrl: './bundle-list.component.html',
  styles: []
})
export class BundleListComponent {
  private roomMap: Map<number, Room> = roomMap;
  public filteredBundles$: Observable<Bundle[]>;

  constructor() {
    this.filteredBundles$ = of(db.bundles);
  }

  getRoomName(roomId: number): string {
    return roomMap.get(roomId).name;
  }
}
