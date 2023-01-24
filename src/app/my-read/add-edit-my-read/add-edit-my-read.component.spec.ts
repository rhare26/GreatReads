import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMyReadComponent } from './add-edit-my-read.component';

describe('AddEditMyReadComponent', () => {
  let component: AddEditMyReadComponent;
  let fixture: ComponentFixture<AddEditMyReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMyReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditMyReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
