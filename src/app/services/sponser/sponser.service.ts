import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sponser } from '../../interfaces/sponser'



const url = 'https://joy-children-home.herokuapp.com/api/sponsers/';
const updateUrl = 'https://joy-children-home.herokuapp.com/api/sponsers/update/';
const deleteUrl = 'https://joy-children-home.herokuapp.com/api/sponsers/delete/';
@Injectable({
  providedIn: 'root'
})
export class SponserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    console.log(this.http.get(url));
    return this.http.get(url);
  }

  getOne(id: any): Observable<any> {
    return this.http.get(`${url}${id}/`);
  }

  create(sponser: Sponser) {
    return this.http.post(url, sponser)
  }

  update(id: any, sponser: Sponser) {
    return this.http.put(`${updateUrl}${id}/`, sponser)
  }


  delete(id: any) {
    return this.http.delete(`${deleteUrl}${id}/`)
  }
}
