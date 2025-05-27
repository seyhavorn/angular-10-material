import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Country,
  CountryCodeService,
} from '../../../services/country-code.service';

@Component({
  selector: 'app-country-code',
  standalone: false,
  templateUrl: './country-code.component.html',
  styleUrl: './country-code.component.scss',
})
export class CountryCodeComponent implements OnInit, OnDestroy {
  selected = 'option2';
  constructor(private countryCodeService: CountryCodeService) {}

  countries: Country[] = [];

  ngOnInit(): void {
    this.countryCodeService.getCountries().subscribe(
      (data: any[]) => {
        this.countries = data;
      },
      (error) => {
        console.error('Error fetching country data:', error);
      }
    );
  }

  ngOnDestroy(): void {}
}
