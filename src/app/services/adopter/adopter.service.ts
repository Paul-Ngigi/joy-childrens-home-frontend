import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adopter } from '../../interfaces/adopter'

const url = 'https://joy-children-home.herokuapp.com/api/adopters/';
const updateUrl = 'https://joy-children-home.herokuapp.com/api/adopters/update/';
const deleteUrl = 'https://joy-children-home.herokuapp.com/api/adopters/delete/';


@Injectable({
  providedIn: 'root'
})
export class AdopterService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    console.log(this.http.get(url));
    return this.http.get(url);
  }

  getOne(id: any): Observable<any> {
    return this.http.get(`${url}${id}/`);
  }

  create(adopter: Adopter) {
    return this.http.post(url, adopter)
  }

  update(id: any, adopter: Adopter) {
    return this.http.put(`${updateUrl}${id}/`, adopter)
  }


  delete(id: any) {
    return this.http.delete(`${deleteUrl}${id}/`)
  }
}
