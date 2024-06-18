import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsItemDetailComponent } from './skills-item-detail.component';

describe('SkillsItemDetailComponent', () => {
  let component: SkillsItemDetailComponent;
  let fixture: ComponentFixture<SkillsItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsItemDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
