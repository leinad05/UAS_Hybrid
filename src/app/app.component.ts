import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage:Storage, private http: HttpClient, private router: Router, public ps:PostService) {}

  username = "";
  iduser = "";
  login_user = "";
  login_passwd = "";
  login_error = "";
  status = "";
  posts = [];

  listPost() {
  	this.ps.postList().subscribe(
      (data)=> {
        this.posts = data;
	    }
	  );
  };

  Login (id:string, user_password:string):Observable<any>
  {
    let body = new HttpParams();
    body = body.set('user_id', id);
    body = body.set('user_password', user_password);
    return this.http.post ("https://ubaya.fun/hybrid/160719019/UAS/login.php", body);
  }

  login() {
    this.Login(this.login_user, this.login_passwd).subscribe(
    (data) => {
      this.status = data['result'];
      
      if(this.status=='success')
      {
        this.username=this.login_user;
        this.storage.set('username',this.username);
        this.storage.set('iduser',data['data']['id']);
        // alert(data['data']['username']);
      }
      else
      {
        this.login_error="username atau password salah";
      }
    });
  }

  register_name = "";
  register_username = "";
  register_passwd = "";
  stat = "";
  register_result = "";

  Register (reg_name:string, reg_username:string, reg_password:string):Observable<any>
  {
    let body = new HttpParams();
    body = body.set('name', reg_name);
    body = body.set('username', reg_username);
    body = body.set('password', reg_password);
    return this.http.post ("https://ubaya.fun/hybrid/160719019/UAS/register.php", body);
  }

  register_user() {
    this.Register(this.register_name ,this.register_username, this.register_passwd).subscribe(
    (data) => {
      this.stat = data['result'];
      
      if(this.stat=='success')
      { 
        this.register_result="Register berhasil";
        this.router.navigate(['/']);
      }
      else
      { 
        this.register_result="Register gagal"; 
      }

    });
  }

  async logout() {
    await this.storage.remove("username");
    await this.storage.remove("iduser");
    window.location.reload();
  }

  async ngOnInit() {
    await this.storage.create();
    this.username = await this.storage.get('username');
    this.iduser = await this.storage.get('iduser');
    this.listPost();
  }
}
