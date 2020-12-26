import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
/* 
  es lo mismo que iniciar en el constructor
  private _http: HttpClient;
*/
  constructor(private readonly _http: HttpClient) { }
}
