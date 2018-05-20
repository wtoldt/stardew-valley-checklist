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
  MatDialogModule} from '@angular/material';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemFilterToolbarComponent } from './item-list/item-filter-toolbar/item-filter-toolbar.component';
import { ItemSeasonFilterComponent } from './item-list/item-filter-toolbar/item-filters/item-season-filter/item-season-filter.component';
import { ItemSearchFilterComponent } from './item-list/item-filter-toolbar/item-filters/item-search-filter/item-search-filter.component';
import { ItemSkillFilterComponent } from './item-list/item-filter-toolbar/item-filters/item-skill-filter/item-skill-filter.component';
import { ItemBundleFilterComponent } from './item-list/item-filter-toolbar/item-filters/item-bundle-filter/item-bundle-filter.component';
import { BundleListComponent } from './bundle-list/bundle-list.component';
import { BundleFilterToolbarComponent } from './bundle-list/bundle-filter-toolbar/bundle-filter-toolbar.component';
import { YesNoDialogComponent } from './yes-no-dialog/yes-no-dialog.component';
import { RoomListComponent } from './room-list/room-list.component';
import { SeasonListComponent } from './season-list/season-list.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { ItemSearchFilterChipComponent } from './item-list/item-filter-toolbar/item-filters/item-search-filter/item-search-filter-chip/item-search-filter-chip.component';
import { ItemSeasonFilterChipComponent } from './item-list/item-filter-toolbar/item-filters/item-search-filter/item-season-filter-chip/item-season-filter-chip.component';
import { ItemSkillFilterChipComponent } from './item-list/item-filter-toolbar/item-filters/item-search-filter/item-skill-filter-chip/item-skill-filter-chip.component';
import { ItemBundleFilterChipComponent } from './item-list/item-filter-toolbar/item-filters/item-search-filter/item-bundle-filter-chip/item-bundle-filter-chip.component';
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
    MatDialogModule
  ],
  providers: [],
  entryComponents: [
    YesNoDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
