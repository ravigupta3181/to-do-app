import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateTodoService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    let url = "http://localhost:3333";
    return this.http.get<any>(url)
  }

  postData(body: any) {
    let url = "http://localhost:3333/create";
    return  this.http.post(url, body)
  }
  getDataById(id: any) {
    let url = "http://localhost:3333/todo/" + id;
    return this.http.get<any>(url);
  }
  updateData(body: any) {
    let url = "http://localhost:3333/todo";
    return this.http.put(url, body)
  }
  deleteData(id: any) {
    let url = "http://localhost:3333/delete/" + id;
    return this.http.delete<any>(url);
  }
}



