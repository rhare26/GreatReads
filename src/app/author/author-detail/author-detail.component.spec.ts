import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDetailComponent } from './author-detail.component';

describe('AuthorDetailComponent', () => {
  let component: AuthorDetailComponent;
  let fixture: ComponentFixture<AuthorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
