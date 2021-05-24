import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptContactsComponent } from './dept-contacts.component';

describe('DeptContactsComponent', () => {
  let component: DeptContactsComponent;
  let fixture: ComponentFixture<DeptContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
