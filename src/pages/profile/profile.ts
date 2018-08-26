import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Geolocation } from '@ionic-native/geolocation';



@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera,
    public actionSheetCtrl: ActionSheetController,public callNumber: CallNumber,public iab: InAppBrowser,public geolocation: Geolocation) {
  }


  
  imageArray = [
    { "title": "health voting", "by": "conducted by SQU", "TIME": "Time & Date" },
    { "title": "health voting", "by": "conducted by SQU", "TIME": "Time & Date" },
    { "title": "health voting", "by": "conducted by SQU", "TIME": "Time & Date" },
    { "title": "health voting", "by": "conducted by SQU", "TIME": "Time & Date" },
    { "title": "health voting", "by": "conducted by SQU", "TIME": "Time & Date" }



  ];



  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }



  presentActionSheet() {//start1
    const actionSheet = this.actionSheetCtrl.create({
      title: 'select Image',
      buttons: [
        {
          text: 'Album',
          handler: () => {
            this.openAlbum();

          }
        }, {
          text: 'Camera',
          handler: () => {
            this.openCamera();


          }
        }, {
          text: 'Cancel',
          role: 'cancel',

          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }//end1


  base64Image = "../assets/imgs/pro.png";


  openAlbum() {//start2

    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }//end2


  openCamera() {//start2

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }//end2



  callNumberMethod(){//start3
   let MobileNumber="+98692903349";
    this.callNumber.callNumber(MobileNumber, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }//end3


  website='https://google.com/';
  openweb(){//start4
    
    this.iab.create(this.website);


  }//end4


  showLocation(){//start5
    //this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      //alert(resp.coords.latitude+"--"+resp.coords.longitude);
      let mapurl="http://maps.google.com/maps?q=23.5859,58.545284";//+resp.coords.latitude+","+resp.coords.longitude;
        this.iab.create(mapurl);
  
     //}).catch((error) => {
     //  console.log('Error getting location', error);
     //});
     
  }//end5
}


