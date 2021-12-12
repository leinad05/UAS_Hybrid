import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { MypostComponent } from './mypost/mypost.component';
import { AddpostComponent } from './addpost/addpost.component';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

const appRoutes:Routes = [
  {path:'register', component: RegisterComponent},
  {path:'mypost', component: MypostComponent},
  {path: 'addpost', component: AddpostComponent},
]

@NgModule({
  declarations: [AppComponent, RegisterComponent, MypostComponent, AddpostComponent],
  entryComponents: [],
  imports: [IonicStorageModule.forRoot(), HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
