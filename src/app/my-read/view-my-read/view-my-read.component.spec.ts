import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyReadComponent } from './view-my-read.component';

describe('ViewMyReadComponent', () => {
  let component: ViewMyReadComponent;
  let fixture: ComponentFixture<ViewMyReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
