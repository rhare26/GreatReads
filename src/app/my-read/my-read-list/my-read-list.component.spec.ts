import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReadListComponent } from './my-read-list.component';

describe('MyReadComponent', () => {
  let component: MyReadListComponent;
  let fixture: ComponentFixture<MyReadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyReadListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
