import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { NativeStorage } from '@ionic-native/native-storage';


import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  data={
    "email":"",
    "password":""
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public afDatabase: AngularFireDatabase,
    public authFB:AuthProvider,
    public nativeStorage: NativeStorage
  ) {
  }

  signInUser(){
    if(this.data.email==""){
      this.presentToast("Enter email");
    }else if(this.data.password==""){
      this.presentToast("Enter password");
    }else{
      const loader = this.loadingCtrl.create({
        content: "<div align='center'><img src='assets/imgs/loader.gif' width='70' height='70' /></div><br/> Please wait...",
        spinner:'hide'
      });
      loader.present();

      this.authFB.loginUser(this.data.email, this.data.password)
        .then((successdata) => {
          loader.dismiss();
          if(successdata.emailVerified){

            this.nativeStorage.setItem('userdetails', {uid: successdata.uid})
            .then(
              () => {
                this.navCtrl.push(HomePage);
              },
              error => {
                this.showAlert("Unable to save user details in app");
              }
            );
              
          }else{
            this.showAlert("Please verify your email");
          }
          
        }).catch((error) => {
          loader.dismiss();
          this.showAlert(error.message);
        });
    }
  }

    presentToast(msg) {
      const toast = this.toastCtrl.create({
        message: msg,
        duration: 3000
      });
      toast.present();
    }
  
    showAlert(msg) {
      const alert = this.alertCtrl.create({
        title: 'City Cinema',
        subTitle: msg,
        buttons: ['OK']
      });
      alert.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  goToForgotPassword(){
    this.navCtrl.push(ForgotpasswordPage);
  }
  goToSignup(){
    this.navCtrl.push(SignupPage);
  }

}
