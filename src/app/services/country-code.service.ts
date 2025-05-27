import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryCodeService {
  private jsonUrl = 'assets/countries.json';

  constructor(private http: HttpClient) {}

  // Fetch country data from the local JSON file
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.jsonUrl);
  }
}

export interface Country {
  name: string;
  code: string;
  dialCode: string;
  iso3Code: string;
}
