import { TestBed } from '@angular/core/testing';
import { ChecklistService, SavedList } from './checklist.service';
import { MaterialModule } from './material.module';
import { isRegExp } from 'util';
import { of } from 'rxjs';

describe('ChecklistService', () => {
  let service: ChecklistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChecklistService],
      imports: [MaterialModule]
    });
    service = TestBed.get(ChecklistService);
  });

  afterEach(() => localStorage.clear());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('askToOverwriteCurrentList should be executable', () => {
    spyOn(service, 'askToOverwriteCurrentList');
    service.askToOverwriteCurrentList();
    expect(service.askToOverwriteCurrentList).toHaveBeenCalled();
  });

  it('shouldnt have any saved lists', () => {
    let lists = null;
    service.getSavedLists().subscribe(l => lists = l);
    expect(lists).toEqual([]);
  });

  it('should save a given list', () => {
    const myList = {name: 'foo', checkedItems: [1]} as SavedList;
    spyOn(service, 'saveList');
    service.saveList(myList);
    expect(service.saveList).toHaveBeenCalledWith(myList);
  });

  it('should get a given list', () => {
    const myList = {name: 'foo', checkedItems: [1]} as SavedList;
    service.saveList(myList);
    expect(service.getSavedList(myList.name)).toEqual(myList);
  });

  it('should ask before deleting a given list', () => {
    const myList = {name: 'foo', checkedItems: [1]} as SavedList;
    service.saveList(myList);
    spyOn(service, 'askToDeleteSave').and.returnValue(of('no'));
    service.deleteList(myList.name);
    expect(service.askToDeleteSave).toHaveBeenCalled();
  });

  it('should delete a given list', () => {
    const myList = {name: 'foo', checkedItems: [1]} as SavedList;
    service.saveList(myList);
    spyOn(service, 'askToDeleteSave').and.returnValue(of('yes'));
    service.deleteList(myList.name);
    expect(service.getSavedList(myList.name)).toBeFalsy();
  });

  it('should start with no checked items', () => {
    expect(service.getCurrentCheckedItems()).toEqual([]);
  });

  it('should be able to set a single checked item', () => {
    service.checkItem(1);
    expect(service.getCurrentCheckedItems()).toEqual([1]);
  });

  it('should be able to set multiple checked items', () => {
    service.checkItems([1, 2]);
    expect(service.getCurrentCheckedItems()).toEqual([1, 2]);
  });
});
