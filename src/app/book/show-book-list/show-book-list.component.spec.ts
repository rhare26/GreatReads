import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBookListComponent } from './show-book-list.component';

describe('ShowBookComponent', () => {
  let component: ShowBookListComponent;
  let fixture: ComponentFixture<ShowBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBookListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
