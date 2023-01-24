import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReadComponent } from './my-read.component';

describe('MyReadComponent', () => {
  let component: MyReadComponent;
  let fixture: ComponentFixture<MyReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
