import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { ProfilePage } from '../pages/profile/profile';
import { CreateVotePage } from '../pages/create-vote/create-vote';
import { ResultsPage } from '../pages/results/results';
import { SliderPage } from '../pages/slider/slider';
import { UserProfilePage } from '../pages/user-profile/user-profile';


import { AuthProvider } from '../providers/auth/auth';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { NativeStorage } from '@ionic-native/native-storage';


import { Camera,CameraOptions } from '@ionic-native/camera';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Geolocation } from '@ionic-native/geolocation';


export const firebaseConfig = {  
  //add firebase keys of web api
  apiKey: "AIzaSyAyLzmv4684oommAcwfzCUQPHpyBi0QQvs",
    authDomain: "myfireapp-2cdd0.firebaseapp.com",
    databaseURL: "https://myfireapp-2cdd0.firebaseio.com",
    projectId: "myfireapp-2cdd0",
    storageBucket: "myfireapp-2cdd0.appspot.com",
    messagingSenderId: "1094927797665"
  };
  
  firebase.initializeApp(firebaseConfig);
  
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    ForgotpasswordPage,
    ProfilePage,
    CreateVotePage,
    ResultsPage,
    SliderPage,
    UserProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), 
    AngularFireModule.initializeApp(firebaseConfig),
     AngularFireAuthModule,
     AngularFireDatabaseModule
    


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    ForgotpasswordPage,
    ProfilePage,
    CreateVotePage,
    ResultsPage,
    SliderPage,
    UserProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    Camera,
    ActionSheet,
    CallNumber,
    InAppBrowser,
    Geolocation
  ]
})
export class AppModule {}
