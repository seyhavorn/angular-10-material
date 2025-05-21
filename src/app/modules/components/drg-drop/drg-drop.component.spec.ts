import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrgDropComponent } from './drg-drop.component';

describe('DrgDropComponent', () => {
  let component: DrgDropComponent;
  let fixture: ComponentFixture<DrgDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrgDropComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrgDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
