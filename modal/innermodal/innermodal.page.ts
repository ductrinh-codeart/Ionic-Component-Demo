import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-innermodal',
  templateUrl: './innermodal.page.html',
  styleUrls: ['./innermodal.page.scss'],
})
export class InnermodalPage implements OnInit {

  constructor(public modalController: ModalController) {

  }


  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  ngOnInit() {
  }

}
