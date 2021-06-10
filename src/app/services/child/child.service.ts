import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Child } from '../../interfaces/child'

const url = 'https://joy-children-home.herokuapp.com/api/sponsers/';
const updateUrl = 'https://joy-children-home.herokuapp.com/api/sponsers/update/';
const deleteUrl = 'https://joy-children-home.herokuapp.com/api/sponsers/delete/';

@Injectable({
  providedIn: 'root'
})

export class ChildService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    console.log(this.http.get(url));
    return this.http.get(url);
  }

  getOne(id: any): Observable<any> {
    return this.http.get(`${url}${id}/`);
  }

  create(child: Child) {
    return this.http.post(url, child)
  }

  update(id: any, child: Child) {
    return this.http.put(`${updateUrl}${id}/`, child)
  }


  delete(id: any) {
    return this.http.delete(`${deleteUrl}${id}/`)
  }
}
