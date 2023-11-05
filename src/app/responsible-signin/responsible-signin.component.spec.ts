import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibleSigninComponent } from './responsible-signin.component';

describe('ResponsibleSigninComponent', () => {
  let component: ResponsibleSigninComponent;
  let fixture: ComponentFixture<ResponsibleSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsibleSigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsibleSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
