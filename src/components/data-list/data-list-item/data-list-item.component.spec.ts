import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListItemComponent } from './data-list-item.component';

describe('DataListItemComponent', () => {
  let component: DataListItemComponent;
  let fixture: ComponentFixture<DataListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
