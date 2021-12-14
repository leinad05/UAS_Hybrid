import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.scss'],
})
export class MypostComponent implements OnInit {

  constructor(private http: HttpClient, private storage:Storage, private alertCtrl: AlertController) { }

  iduser = 0;
  posts = [];
  status = "";

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

  DeletePost (id:number):Observable<any>
  {
    let body = new HttpParams();
    body = body.set('id', id);
    return this.http.post ("https://ubaya.fun/hybrid/160719019/UAS/delete.php", body);
  }

  delete(index:number) {
    this.DeletePost(index).subscribe(
    (data) => {
      this.status = data['pesan'];
      
      if(this.status=='berhasil delete')
      {
        alert("Berhasil Delete!");
        window.location.reload();
      }
      else
      {
        alert("Gagal Delete!");
      }
    });
  }

  async deletedialog(index:number) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Delete',
      message: '<strong>Are you sure want to delete this post?</strong>',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: Cancel');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.delete(index);
          }
        }
      ]
    });

    await alert.present();
  }

  async ngOnInit() {
    await this.storage.create();
    this.iduser = await this.storage.get('iduser');
    this.myPostList();
  }

}
