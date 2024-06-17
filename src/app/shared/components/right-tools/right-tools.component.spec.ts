import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightToolsComponent } from './right-tools.component';

describe('RightToolsComponent', () => {
  let component: RightToolsComponent;
  let fixture: ComponentFixture<RightToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightToolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
