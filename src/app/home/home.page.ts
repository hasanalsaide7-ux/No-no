import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  query = '';
  results: any[] = [];

  constructor(private http: HttpClient) {}

  search() {
    if (this.query.trim().length === 0) return;

    const url = 'https://cinemana.shabakaty.com/api/android/AdvancedSearch?query=' + encodeURIComponent(this.query);
    this.http.get<any[]>(url).subscribe((data) => {
      this.results = data;
    });
  }
}