import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

import { ListPage } from '../../pages/list/list';

/**
 * Generated class for the SubcarpetaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subcarpeta',
  templateUrl: 'subcarpeta.html',
})
export class SubcarpetaPage {
  datos: any;
  nombre: string;
  carpeta: string;
  subcarpeta: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private weatherProvider:WeatherProvider, public loadingCtrl: LoadingController) {
    this.nombre = this.navParams.get('thing2');
    this.carpeta = this.navParams.get('thing1');
    this.subcarpeta = this.navParams.get('thing3');
    this.busca(this.navParams.get('thing1'));
    console.log(this.navParams.get('thing2'));
    console.log(this.navParams.get('thing1'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubcarpetaPage');
  }

  busca(tipo){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    console.log(tipo);
    loading.present();
    
    this.weatherProvider.getSubCarpetas(tipo).
    subscribe(posts => {
      this.datos = posts.subcarpetas;
      loading.dismiss();
      console.log(this.datos);
    });
  }

  goToTheLists(tipo,nombre,sub){
    this.navCtrl.push(ListPage, {
      thing1: tipo,
      thing2: nombre,
      thing3: sub,
    });
  }

}
