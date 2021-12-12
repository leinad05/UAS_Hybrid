import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-detailpost',
  templateUrl: './detailpost.component.html',
  styleUrls: ['./detailpost.component.scss'],
})
export class DetailpostComponent implements OnInit {

  judul:string = "";
  isi:string = "";
  tanggal:string = "";
  gambar:string = "";
  total:number = 0;
  username:string = "";

  constructor(public ps:PostService, public route:ActivatedRoute) { }

  id:number=this.route.snapshot.params['id'];
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

  ngOnInit() {
    this.detailPost(this.id);
  }

}
