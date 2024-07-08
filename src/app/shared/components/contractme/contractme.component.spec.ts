import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractmeComponent } from './contractme.component';

describe('ContractmeComponent', () => {
  let component: ContractmeComponent;
  let fixture: ComponentFixture<ContractmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractmeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
