import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCodeComponent } from './country-code.component';

describe('CountryCodeComponent', () => {
  let component: CountryCodeComponent;
  let fixture: ComponentFixture<CountryCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
