import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-addkomentar',
  templateUrl: './addkomentar.component.html',
  styleUrls: ['./addkomentar.component.scss'],
})
export class AddkomentarComponent implements OnInit {

  iduser = 0;
  isi_komen = "";
  id:number=this.route.snapshot.params['id'];

  constructor(private http: HttpClient, public route:ActivatedRoute, private storage:Storage) { }

  newKomentar (iduser:number, id:number, isi:string):Observable<any> 
  {
    let body = new HttpParams();
    body = body.set('users_id', iduser);
    body = body.set('post_id', id);
    body = body.set('isi', isi);
  	return this.http.post ("https://ubaya.fun/hybrid/160719019/UAS/addkomentar.php", body);
  }

  addKomentar() {
    this.newKomentar(this.iduser, this.id,
      this.isi_komen,).subscribe(
    (data) => {
      alert(data['pesan']);
      window.location.href = "/komentar/"+this.id;
    });
  }

  async ngOnInit() {
    await this.storage.create();
    this.iduser = await this.storage.get('iduser');
  }
}
