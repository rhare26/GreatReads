import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBookComponent } from './show-book.component';

describe('ShowBookComponent', () => {
  let component: ShowBookComponent;
  let fixture: ComponentFixture<ShowBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
