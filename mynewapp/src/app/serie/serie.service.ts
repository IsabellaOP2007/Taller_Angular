import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { Serie } from './serie';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  private url = '/data/series.json'; 

  constructor(private http: HttpClient) {}         

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.url);
  }
  
}
