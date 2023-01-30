import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAuthorComponent } from './add-edit-author.component';

describe('AddEditAuthorComponent', () => {
  let component: AddEditAuthorComponent;
  let fixture: ComponentFixture<AddEditAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAuthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
