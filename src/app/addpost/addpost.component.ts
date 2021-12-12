import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss'],
})
export class AddpostComponent implements OnInit {

  constructor(private http: HttpClient, public camera: Camera, private storage: Storage) { }

  judulPost: string = "";
  isiPost: string = "";
  postUrl: string = '';
  iduser = 0;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.CAMERA,
    saveToPhotoAlbum: true
  };

  ambilFoto() {
    this.camera.getPicture(this.options).then(
      (imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.postUrl = base64Image;
      }
      , (err) => {
        // kalau error
      }
    );
  }

  newPost(judul: string, isi: string, url: string): Observable<any> {
    let body = new HttpParams();
    body = body.set('judul', judul);
    body = body.set('isi', isi);
    body = body.set('url', url);
    body = body.set('user_id', this.iduser);
    return this.http.post("https://ubaya.fun/hybrid/160719019/UAS/addpost.php", body);
  }

  addPost() {
    this.newPost(this.judulPost, this.isiPost, this.postUrl).subscribe(
      (data) => {
        alert(data['pesan']);
      });
  }

  async ngOnInit() {
    await this.storage.create();
    this.iduser = await this.storage.get('iduser');
  }

}
