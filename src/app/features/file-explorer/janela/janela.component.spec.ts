import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanelaComponent } from './janela.component';

describe('JanelaComponent', () => {
  let component: JanelaComponent;
  let fixture: ComponentFixture<JanelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JanelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JanelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
