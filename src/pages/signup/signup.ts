import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  data={
    "username":"",
    "email":"",
    "password":"",
    "confirmpassword":"",
    "usertype":""
  };

  usertype="user"
  btn = 0;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
     public navParams: NavParams,
     public loadingCtrl: LoadingController,
     public afDatabase: AngularFireDatabase,
     public authFB:AuthProvider
  ) {

    
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signUpUser(){
    if (this.data.email == "") {
      this.presentToast("Enter email");
    } else if (this.data.password == "") {
      this.presentToast("Enter password");
    }else if (this.data.password != this.data.confirmpassword) {
      this.presentToast("Password should match confirm password");
    } else {

      const loader = this.loadingCtrl.create({
        content: "<div align='center'><img src='assets/imgs/loader.gif' width='70' height='70' /></div><br/> Please wait...",
        spinner: 'hide'
      });
      loader.present();

      this.authFB.signupUser(this.data.email, this.data.password)
        .then((successdata) => {


          delete this.data.password;
          delete this.data.confirmpassword;
          this.data.usertype=this.usertype;
          this.afDatabase.list("users").set(successdata.uid, this.data)
            .then((usersuccess) => {

             

              this.authFB.verifyUser().then((verifysuccess)=>{
                loader.dismiss();
                this.showAlert("User registered successfully");
              }).catch((verifyerror)=>{
                loader.dismiss();
                this.showAlert(verifyerror.message);
              });


            }).catch((err) => {
              loader.dismiss();
              this.showAlert(err.message);
            });


        }).catch((error) => {
          loader.dismiss();
          this.showAlert(error.message);
        });



    }  }

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

  goToUser() {
    this.btn = 1;
    this.usertype="user";
  }
  goToAdmin() {
    this.btn = 2;
    this.usertype="admin";
  }
  goToBusiness() {
    this.btn = 3;
    this.usertype="business";
  }


}
