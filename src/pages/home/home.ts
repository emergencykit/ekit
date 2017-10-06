import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../../pages/list/list';
import { SubcarpetaPage } from '../../pages/subcarpeta/subcarpeta';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listPage = ListPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  goToTheLists(tipo,nombre,sub){
    this.navCtrl.push(ListPage, {
      thing1: tipo,
      thing2: nombre,
      thing3: sub,
    });
  }

  goToTheSubolders(tipo,nombre){
    this.navCtrl.push(SubcarpetaPage, {
      thing1: tipo,
      thing2: nombre
    });
  }

  
}
