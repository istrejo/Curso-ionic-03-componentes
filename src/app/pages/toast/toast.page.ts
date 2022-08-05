import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {
  constructor(private toastCtrl: ToastController) {}

  ngOnInit() {}

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Your settins have been saved',
      duration: 2000,
    });

    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastCtrl.create({
      header: 'Toast header',
      message: 'Click to close',
      icon: 'information-circle',
      position: 'top',
      buttons: [
        {
          side: 'start',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          },
        },
        {
          text: 'done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });

    toast.present();
  }
}
