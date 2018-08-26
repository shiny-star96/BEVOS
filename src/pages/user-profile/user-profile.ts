import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular';//this is a component ,components  already imported in modules ,u dont have to do it agin
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {



  constructor(public navCtrl: NavController, public navParams: NavParams,public callNumber: CallNumber
    ,public iab: InAppBrowser,public camera: Camera,public actionSheetCtrl: ActionSheetController,
    public geolocation: Geolocation) {
  }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad ProfilePage');
    }
  
  
    gotoalaret()
  {
  let mobileNumber="+986 92903349";
  this.callNumber.callNumber(mobileNumber, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
  
  
  
  
  
  ListArray=[
    {"icon":"md-globe","des":"www.google.com"},
    {"icon":"ios-mail-outline","des":"aljhwaria@gmail.com"},
    {"icon":"ios-call-outline","des":"92903349"},
    {"icon":"md-locate","des":"Oman,Muscat"}
  ];

   
  imageArray = [
    { "title": "health voting", "by": "conducted by SQU", "TIME": "Time & Date" },
    { "title": "health voting", "by": "conducted by SQU", "TIME": "Time & Date" },
    { "title": "health voting", "by": "conducted by SQU", "TIME": "Time & Date" },
    { "title": "health voting", "by": "conducted by SQU", "TIME": "Time & Date" },
    { "title": "health voting", "by": "conducted by SQU", "TIME": "Time & Date" }



  ];

  
  
    callPlugins(k){
    if(k==0){
      this.openWebsite();
    }
  
    else if(k==3){
      this.showLocation();
    }
    }
  
  
  openWebsite(){
    this.iab.create('https://google.com/');
  
  }
  
  
  showLocation(){
    //this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      //alert(resp.coords.latitude+"--"+resp.coords.longitude);
      let mapurl="http://maps.google.com/maps?q=23.5859,58.545284";//+resp.coords.latitude+","+resp.coords.longitude;
        this.iab.create(mapurl);
  
     //}).catch((error) => {
     //  console.log('Error getting location', error);
     //});
     
  }
  
  
  base64Image = "../assets/imgs/pro.png";
  
  getImage(){
    this.presentActionSheet();
  }
  
  getImageFromCamera(){
  
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,//GIVES u the path of ur img in ur device
      encodingType: this.camera.EncodingType.JPEG,// gives u format of img
      mediaType: this.camera.MediaType.PICTURE//
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
  
  getImageFromGallery(){
    
    const options: CameraOptions = {
      quality: 100,
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY, //THE ONLY DIFFERENCE BETWEEN CAMERA AND gALLERY METHODS 
      destinationType: this.camera.DestinationType.DATA_URL,//GIVES u the path of ur img in ur device
      encodingType: this.camera.EncodingType.JPEG,// gives u format of img
      mediaType: this.camera.MediaType.PICTURE//
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
  
  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image',
      buttons: [
        {
          text: 'camera',
          handler: () => {
            this.getImageFromCamera();
          }
        },{
          text: 'Gallery',
          handler: () => {
            this.getImageFromGallery();        }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  }
  
  


