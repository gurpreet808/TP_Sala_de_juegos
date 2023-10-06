import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

import { ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { MessageService } from 'primeng/api';

import { HomeComponent } from './componentes/home/home.component';
import { Error404Component } from './componentes/error404/error404.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SalaChatComponent } from './componentes/sala-chat/sala-chat.component';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { MayorMenorComponent } from './componentes/mayor-menor/mayor-menor.component';
import { AutorPropioPipe } from './pipes/autor-propio.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    LoginComponent,
    QuienSoyComponent,
    NavBarComponent,
    RegistroComponent,
    SalaChatComponent,
    AhorcadoComponent,
    MayorMenorComponent,
    AutorPropioPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HammerModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    DialogModule,
    InputTextareaModule,
    CardModule,
    DropdownModule,
    PasswordModule,
    MessagesModule,
    MessageModule
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
