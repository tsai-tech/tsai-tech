import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndAndPwaComponent } from './dnd-and-pwa.component';

describe('DndAndPwaComponent', () => {
  let component: DndAndPwaComponent;
  let fixture: ComponentFixture<DndAndPwaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndAndPwaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndAndPwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
