import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment'; 
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(
      {"projectId":"controlleds-bfa79",
      "appId":"1:1017184753447:web:6fdeec315214786f06bb02",
      "storageBucket":"controlleds-bfa79.appspot.com",
      "apiKey":"AIzaSyBNQIZKbvh4RbEOA24sAQrT65RFPSNdSQU",
      "authDomain":"controlleds-bfa79.firebaseapp.com",
      "messagingSenderId":"1017184753447"}))],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
