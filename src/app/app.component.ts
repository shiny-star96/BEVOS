import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { HomePage } from '../pages/home/home';
//import { CreateVotePage } from '../pages/create-vote/create-vote';
//import { SigninPage } from '../pages/signin/signin';
//import { ResultsPage } from '../pages/results/results';
import { SliderPage } from '../pages/slider/slider';
//import { UserProfilePage } from '../pages/user-profile/user-profile';

// import { ProfilePage } from '../pages/profile/profile';



// import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
// import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SliderPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


}

