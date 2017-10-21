import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms'
import { GetphotoService } from './services/getphoto.service'

import { HttpModule } from '@angular/http'
import {RouterModule,Routes} from "@angular/router" //เพิ่ม
const appRoutes:Routes = [
  {path:"",component:UserComponent},
  {path:"about",component:AboutusComponent}
] // เพิ่ม

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent
    
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
