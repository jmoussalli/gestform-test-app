import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGestformTestAproposComponent } from './app-gestform-test-apropos.component';

describe('AppGestformTestAproposComponent', () => {
  let component: AppGestformTestAproposComponent;
  let fixture: ComponentFixture<AppGestformTestAproposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppGestformTestAproposComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppGestformTestAproposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
