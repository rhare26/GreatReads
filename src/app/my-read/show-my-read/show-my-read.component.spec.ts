import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyReadComponent } from './show-my-read.component';

describe('ShowMyReadComponent', () => {
  let component: ShowMyReadComponent;
  let fixture: ComponentFixture<ShowMyReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMyReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMyReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
