import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { responseDefault } from '../_models/responseDefault';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(
    private http: HttpClient
  ) { }


  doBuy(object): Observable<responseDefault>{
    return this.http.post<responseDefault>('/states/user/create', object);
}
}
