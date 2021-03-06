import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { MypostComponent } from './mypost/mypost.component';
import { AddpostComponent } from './addpost/addpost.component';
import { DetailpostComponent } from './detailpost/detailpost.component';
import { KomentarComponent } from './komentar/komentar.component';
import { AddkomentarComponent } from './addkomentar/addkomentar.component';
import { EditpostComponent } from './editpost/editpost.component';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Camera } from '@ionic-native/camera/ngx';

const appRoutes:Routes = [
  {path:'register', component: RegisterComponent},
  {path:'mypost', component: MypostComponent},
  {path: 'addpost', component: AddpostComponent},
  {path:'detail/:id' , component:DetailpostComponent},
  {path:'komentar/:id' , component:KomentarComponent},
  {path:'addkomentar/:id' , component:AddkomentarComponent},
  {path:'editpost/:id' , component:EditpostComponent},
]

@NgModule({
  declarations: [AppComponent, RegisterComponent, MypostComponent, AddpostComponent, DetailpostComponent, KomentarComponent, AddkomentarComponent, EditpostComponent],
  entryComponents: [],
  imports: [IonicStorageModule.forRoot(), HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [Camera, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
