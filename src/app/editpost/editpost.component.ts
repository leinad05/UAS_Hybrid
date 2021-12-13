import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'
import { Storage } from '@ionic/storage';
import { PostService } from '../post.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.scss'],
})
export class EditpostComponent implements OnInit {

  constructor(public ps:PostService, private http: HttpClient, public route:ActivatedRoute, private storage:Storage) { }

  id:number=this.route.snapshot.params['id'];
  iduser = 0;

  judul:string = "";
  isi:string = "";
  tanggal:string = "";
  gambar:string = "";
  total:number = 0;
  username:string = "";
  judulPost: string = "";
  isiPost: string = "";


  currentpost = [];

  detailPost(id){
    this.ps.postDetail(id).subscribe(
      (data)=> {
        this.judul = data['judul'];
        this.isi = data['isi'];
        this.tanggal = data['tanggal'];
        this.gambar = data['gambar'];
        this.total = data['total_like'];
        this.username = data['username'];
	    }
	  );
  };

  edit(judul: string, isi: string): Observable<any> {
    let body = new HttpParams();
    body = body.set('judul', judul);
    body = body.set('isi', isi);
    body = body.set('post_id', this.id);
    return this.http.post("https://ubaya.fun/hybrid/160719019/UAS/editpost.php", body);
  }

  editPost() {
    this.edit(this.judulPost, this.isiPost).subscribe(
      (data) => {
        alert(data['pesan']);
      });
  }

  async ngOnInit() {
    await this.storage.create();
    this.iduser = await this.storage.get('iduser');
    this.detailPost(this.id);
  }

}
