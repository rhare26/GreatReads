import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReadTableComponent } from './my-read-table.component';

describe('MyReadComponent', () => {
  let component: MyReadTableComponent;
  let fixture: ComponentFixture<MyReadTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyReadTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
