import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  postArray = [
    {
      "name": "Oman",
      "img": "img4.jpg",
      "caption": "Sultanate of Oman",
      "desc": "Oman, a nation on the Arabian Peninsula",
      "userImg": "user1.png",
      "views": "156,249",
      "date": "1",
      "comments": "281"
    },
    {
      "name": "Oman",
      "img": "img2.png",
      "caption": "Sultanate of Oman",
      "desc": "Oman, a nation on the Arabian Peninsula",
      "userImg": "user1.png",
      "views": "156,249",
      "date": "1",
      "comments": "281"
    },
    {
      "name": "Oman",
      "img": "img3.jpg",
      "caption": "Sultanate of Oman",
      "desc": "Oman, a nation on the Arabian Peninsula",
      "userImg": "user1.png",
      "views": "156,249",
      "date": "1",
      "comments": "281"
    },
    {
      "name": "Oman",
      "img": "img4.jpg",
      "caption": "Sultanate of Oman",
      "desc": "Oman, a nation on the Arabian Peninsula",
      "userImg": "user1.png",
      "views": "156,249",
      "date": "1",
      "comments": "281"
    }
  ];


  
}
