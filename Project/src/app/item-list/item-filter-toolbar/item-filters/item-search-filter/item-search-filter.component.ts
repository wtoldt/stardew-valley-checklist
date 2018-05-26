import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ItemSearchFilter } from '..';

@Component({
  selector: 'app-item-search-filter',
  templateUrl: './item-search-filter.component.html',
  styles: [
    '.example-spacer {flex: 1 1 auto;}',
    '.container {display: flex; box-sizing: border-box; width: 100%;}',
    '.search-input {width: 250px}'
  ]
})
export class ItemSearchFilterComponent {
  @ViewChild('nameSearchInput')
  nameSearchInput: ElementRef;
  @ViewChild('sourceSearchInput')
  sourceSearchInput: ElementRef;
  @Input()
  itemSearchFilter: ItemSearchFilter;
  @Output()
  itemSearchFilterChange = new EventEmitter<ItemSearchFilter>();

  constructor() { }

  onNameSearchEnter(event: {target: {value: string}}) {
    const newItemSearchFilter = {...this.itemSearchFilter, nameString: event.target.value};
    this.itemSearchFilterChange.emit(newItemSearchFilter);
    this.nameSearchInput.nativeElement.blur();
  }

  onNameSearchClear() {
    this.nameSearchInput.nativeElement.value = '';
    const newItemSearchFilter = {...this.itemSearchFilter, nameString: ''};
    this.itemSearchFilterChange.emit(newItemSearchFilter);
    this.nameSearchInput.nativeElement.blur();
  }

  onSourceSearchEnter(event: {target: {value: string}}) {
    const newItemSearchFilter = {...this.itemSearchFilter, sourceString: event.target.value};
    this.itemSearchFilterChange.emit(newItemSearchFilter);
    this.sourceSearchInput.nativeElement.blur();
  }

  onSourceSearchClear() {
    this.sourceSearchInput.nativeElement.value = '';
    const newItemSearchFilter = {...this.itemSearchFilter, sourceString: ''};
    this.itemSearchFilterChange.emit(newItemSearchFilter);
    this.sourceSearchInput.nativeElement.blur();
  }

  onHideCheckedChanged(checked: boolean): void {
    const newItemSearchFilter = {...this.itemSearchFilter, hideChecked: checked};
    this.itemSearchFilterChange.emit(newItemSearchFilter);
  }

}
