import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(private storage:Storage, private http: HttpClient) { }

  // register_name = "";
  // register_username = "";
  // register_passwd = "";
  // status = "";
  // register_result = "";

  // Register (reg_name:string, reg_username:string, reg_password:string):Observable<any>
  // {
  //   let body = new HttpParams();
  //   body = body.set('name', reg_name);
  //   body = body.set('username', reg_username);
  //   body = body.set('password', reg_password);
  //   return this.http.post ("https://ubaya.fun/hybrid/160719019/UAS/register.php", body);
  // }

  // register_user() {
  //   this.Register(this.register_name ,this.register_username, this.register_passwd).subscribe(
  //   (data) => {
  //     this.status = data['result'];
      
  //     if(this.status=='success')
  //     { this.register_result="Register berhasil"; }
  //     else
  //     { this.register_result="Register gagal"; }

  //   });
  // }


  ngOnInit() {}

}
