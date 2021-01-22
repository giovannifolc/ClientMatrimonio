import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RSVP} from '../models/rsvp.model';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor(private http: HttpClient) {

  }
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  private API_PATH = 'http://localhost:4200/api';

  sendRSVP(data: RSVP) {
    let p;
    return this.http.post( `${this.API_PATH}/RSVP`, data, this.httpOptions).pipe(
      catchError(err => {
        console.error(err);
        return throwError(err);
      })).subscribe(x => p=x);
  }
}
