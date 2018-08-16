import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {

  email='';


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public afDatabase: AngularFireDatabase,
    public authFB:AuthProvider
  
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }

  sendEmail(){
    if(this.email==""){
      this.presentToast("Enter email");
    }else{
      const loader = this.loadingCtrl.create({
        content: "<div align='center'><img src='assets/imgs/loader.gif' width='70' height='70' /></div><br/> Please wait...",
        spinner:'hide'
      });
      loader.present();

      this.authFB.resetPassword(this.email)
        .then((successdata) => {
          loader.dismiss();
          this.showAlert("Email sent successfully. please reset the password");
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

}
