import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private data : HttpClient) {}
    getall(){
      return this.data.get("https://jsonplaceholder.typicode.com/users");

   }
}
