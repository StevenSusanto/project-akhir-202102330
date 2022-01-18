import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TambahData } from '../model/tambah-data.model';

const baseUrl = 'https://spa-api.aqiladigital.com/api/divisions'
@Injectable({
  providedIn: 'root'
})
export class TambahDataService {

  constructor(private http:HttpClient) { }

  getAll():Observable<TambahData[]>{
    return this.http.get<TambahData[]>(baseUrl);
  }
  
}