import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postList():Observable<any> {
  	return this.http.get("https://ubaya.fun/hybrid/160719019/UAS/listpost.php");
  }

  constructor(private http: HttpClient) { }
}
