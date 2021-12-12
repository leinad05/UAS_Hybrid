import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.scss'],
})
export class MypostComponent implements OnInit {

  constructor(private http: HttpClient, private storage:Storage) { }

  iduser = 0;
  posts = [];

  myPost():Observable<any>{
    let body = new HttpParams();
    body = body.set('user_id', this.iduser);
    return this.http.post ("https://ubaya.fun/hybrid/160719019/UAS/mypost.php", body);
  }

  myPostList(){
    this.myPost().subscribe(
      (data)=> {
        this.posts = data;
	    }
    );
  }

  async ngOnInit() {
    await this.storage.create();
    this.iduser = await this.storage.get('iduser');
    this.myPostList();
  }

}
