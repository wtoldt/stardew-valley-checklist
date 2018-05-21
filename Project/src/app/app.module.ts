import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule,
  MatSidenavModule, MatIconModule, MatListModule,
  MatGridListModule, MatCardModule, MatMenuModule,
  MatTabsModule, MatChipsModule, MatSelectModule,
  MatTooltipModule, MatInputModule, MatCheckboxModule,
  MatSlideToggleModule, MatPaginatorModule,
  MatDialogModule, MatSnackBarModule} from '@angular/material';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemFilterToolbarComponent } from './item-list/item-filter-toolbar/item-filter-toolbar.component';
import { ItemSeasonFilterComponent,
  ItemSeasonFilterChipComponent } from './item-list/item-filter-toolbar/item-filters/item-season-filter';
import { ItemSearchFilterComponent,
  ItemSearchFilterChipComponent } from './item-list/item-filter-toolbar/item-filters/item-search-filter';
import { ItemSkillFilterComponent,
  ItemSkillFilterChipComponent } from './item-list/item-filter-toolbar/item-filters/item-skill-filter';
import { ItemBundleFilterComponent,
  ItemBundleFilterChipComponent } from './item-list/item-filter-toolbar/item-filters/item-bundle-filter/';
import { BundleListComponent } from './bundle-list/bundle-list.component';
import { BundleFilterToolbarComponent } from './bundle-list/bundle-filter-toolbar/bundle-filter-toolbar.component';
import { YesNoDialogComponent } from './yes-no-dialog/yes-no-dialog.component';
import { RoomListComponent } from './room-list/room-list.component';
import { SeasonListComponent } from './season-list/season-list.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { BundleFilterChipComponent } from './bundle-list/bundle-filter-toolbar/bundle-filters/bundle-filter-chip.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ItemListComponent,
    ItemFilterToolbarComponent,
    ItemSeasonFilterComponent,
    ItemSearchFilterComponent,
    ItemSkillFilterComponent,
    ItemBundleFilterComponent,
    BundleListComponent,
    BundleFilterToolbarComponent,
    YesNoDialogComponent,
    RoomListComponent,
    SeasonListComponent,
    SkillListComponent,
    ItemSearchFilterChipComponent,
    ItemSeasonFilterChipComponent,
    ItemSkillFilterChipComponent,
    ItemBundleFilterChipComponent,
    BundleFilterChipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatChipsModule,
    MatSelectModule,
    MatTooltipModule,
    MatInputModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  entryComponents: [
    YesNoDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
