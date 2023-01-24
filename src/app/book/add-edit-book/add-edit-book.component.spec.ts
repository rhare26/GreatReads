import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBookComponent } from './add-edit-book.component';

describe('AddEditBookComponent', () => {
  let component: AddEditBookComponent;
  let fixture: ComponentFixture<AddEditBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
