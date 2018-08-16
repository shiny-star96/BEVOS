import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  imageArray = [
    {"title":"health voting","by":"conducted by SQU","TIME":"Time & Date"},
    {"title":"health voting","by":"conducted by SQU","TIME":"Time & Date"},
    {"title":"health voting","by":"conducted by SQU","TIME":"Time & Date"},
    {"title":"health voting","by":"conducted by SQU","TIME":"Time & Date"},
    {"title":"health voting","by":"conducted by SQU","TIME":"Time & Date"}



  ];
 
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
