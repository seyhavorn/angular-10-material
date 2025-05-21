import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrgDropBetweenListComponent } from './drg-drop-between-list.component';

describe('DrgDropBetweenListComponent', () => {
  let component: DrgDropBetweenListComponent;
  let fixture: ComponentFixture<DrgDropBetweenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrgDropBetweenListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrgDropBetweenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
