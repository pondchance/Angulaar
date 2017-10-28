import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms'
import { GetphotoService } from './services/getphoto.service'

import { HttpModule } from '@angular/http'
import {RouterModule,Routes} from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component'; //เพิ่ม
const appRoutes:Routes = [
  {path:"",component:UserComponent},
  {path:"about",component:AboutusComponent}
] // เพิ่ม

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
,
    LoginComponent, HomeComponent, HeaderComponent, FooterComponent  , AboutusComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes) //เพิ่ม
  ],

  bootstrap: [AppComponent],
  providers: [ GetphotoService ]
})
export class AppModule { }
