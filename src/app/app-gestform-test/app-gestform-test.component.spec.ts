import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGestformTestComponent } from './app-gestform-test.component';

describe('AppGestformTestComponent', () => {
  let component: AppGestformTestComponent;
  let fixture: ComponentFixture<AppGestformTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppGestformTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppGestformTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
