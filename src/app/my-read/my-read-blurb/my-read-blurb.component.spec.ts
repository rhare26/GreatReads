import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReadBlurbComponent } from './my-read-blurb.component';

describe('MyReadBlurbComponent', () => {
  let component: MyReadBlurbComponent;
  let fixture: ComponentFixture<MyReadBlurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyReadBlurbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReadBlurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
