import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Todo } from "./todo";

@Injectable({
  providedIn: "root",
})
export class TododataService {
  constructor(private http: HttpClient) {}
  url: string = environment.apiendpoint + "tasks/";
  getAllTodos() {
    return this.http.get<Todo[]>(this.url);
  }
  deletetodo(id: string) {
    let head = new HttpHeaders().set(
      environment.headerName,
      environment.headerValue
    );
    return this.http.delete(this.url + id, { headers: head });
  }
  addtodo(item: Todo) {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set(
      environment.headerName,
      environment.headerValue
    );
    return this.http.post(this.url, body, { headers: head });
  }
}
