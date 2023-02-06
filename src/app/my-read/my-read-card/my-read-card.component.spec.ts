import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReadCardComponent } from './my-read-card.component';

describe('MyReadCardComponent', () => {
  let component: MyReadCardComponent;
  let fixture: ComponentFixture<MyReadCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyReadCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
