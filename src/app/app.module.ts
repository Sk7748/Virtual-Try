import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';
import { WebcamModule } from 'ngx-webcam';
import { NecklaceComponent } from './necklace/necklace.component';
import { BraceletComponent } from './bracelet/bracelet.component';
import { EarringComponent } from './earring/earring.component';
import { NoseringComponent } from './nosering/nosering.component';

import { Routes, RouterModule } from '@angular/router';

const appRoutes : Routes=[
   
{path:'necklace',component: NecklaceComponent},  
{path:'bracelet',component:BraceletComponent},  
{ path: 'camera', component: CameraComponent },
{ path: 'nosering', component: NoseringComponent },
{ path: 'earring', component: EarringComponent },
];




@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    NecklaceComponent,
    BraceletComponent,
    EarringComponent,
    NoseringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    RouterModule.forChild(appRoutes)  


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
