import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-komentar',
  templateUrl: './komentar.component.html',
  styleUrls: ['./komentar.component.scss'],
})
export class KomentarComponent implements OnInit {

  constructor(private http: HttpClient, public route:ActivatedRoute) { }

  komentars = [];
  id:number=this.route.snapshot.params['id'];

  komentar(id:number):Observable<any>{
    let body = new HttpParams();
    body = body.set('post_id', id);
    return this.http.post ("https://ubaya.fun/hybrid/160719019/UAS/listkomen.php", body);
  }

  komentarList(id){
    this.komentar(id).subscribe(
      (data)=> {
        this.komentars = data;
	    }
    );
  }

  ngOnInit() {
    this.komentarList(this.id);
  }
}
