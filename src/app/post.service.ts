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

  postDetail(id:number):Observable<any> {
    let body = new HttpParams();
    body = body.set('id', id);
  	return this.http.post("https://ubaya.fun/hybrid/160719019/UAS/detailpost.php", body);
  }

  constructor(private http: HttpClient) { }
}
