import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllClaimComponent } from './get-all-claim.component';

describe('GetAllClaimComponent', () => {
  let component: GetAllClaimComponent;
  let fixture: ComponentFixture<GetAllClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllClaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
