import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor(private http: HttpClient) {

  }
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  API_PATH = 'http://localhost:4200/';

}
