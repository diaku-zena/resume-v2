import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExplorerItemComponent } from './file-explorer-item.component';

describe('FileExplorerItemComponent', () => {
  let component: FileExplorerItemComponent;
  let fixture: ComponentFixture<FileExplorerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileExplorerItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileExplorerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
