import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss']
})
export class ImageModalPage implements OnInit {
  // @ViewChild basically grabs a reference to the according DOM element
  // and because it's a shadow DOM component from Ionic
  // we need to tell Angular to read the ElementRef!
  @ViewChild('slider', { read: ElementRef }) slider: ElementRef;
  img: any;

  sliderOpts = {
    zoom: {
      maxRatio: 5
    }
  };
  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.img = this.navParams.get('img');
  }

  // Swiper supports zoom images functionality
  // where you can zoom-in image by pinch gesture
  // or by zoom-in/out by double tap on it.
  // https://idangero.us/swiper/api/#zoom
  zoom(zoomIn: boolean) {
    let zoom = this.slider.nativeElement.swiper.zoom;
    if (zoomIn) {
      zoom.in();
    } else {
      zoom.out();
    }
  }

  close() {
    this.modalController.dismiss();
  }
}
