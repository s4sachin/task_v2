import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../interface/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl =
    'https://drive.google.com/file/d/1FeAI_D3D_xlfZ__a7MFSCviBLrVc2jFk/view?usp=share_link';
  httpHeaders = [''];
  constructor(private http: HttpClient) {}
  getTableData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiUrl, {
      headers: new HttpHeaders().set('API-Key', '<API-KEY>'),
      responseType: 'text' as 'json',
    });
  }
}
