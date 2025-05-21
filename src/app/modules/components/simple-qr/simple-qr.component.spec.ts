import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleQrComponent } from './simple-qr.component';

describe('SimpleQrComponent', () => {
  let component: SimpleQrComponent;
  let fixture: ComponentFixture<SimpleQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleQrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
