import { Component } from '@angular/core';
import { NavController, Platform, AlertController, ActionSheetController, LoadingController , NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { DetailPage } from '../../pages/detail/detail';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [FileTransfer, FileTransferObject, File]
})
export class ListPage {
  datos: any;
  storageDirectory: string = '';
  nombre: string;
  tipo_file: string;
  codigo: string;
  searchQuery: string = '';
  items: any; 
  showSearchbar: boolean = false;
  constructor(public socialSharing: SocialSharing, public actionSheetCtrl: ActionSheetController, public fileOpener: FileOpener, public alertCtrl: AlertController, public transfer: FileTransfer, public platform: Platform, public file: File, public navCtrl: NavController, public navParams: NavParams, private weatherProvider:WeatherProvider, public loadingCtrl: LoadingController) {
    console.log(this.navParams.get('thing1'));
    this.nombre = this.navParams.get('thing2');
    this.busca(this.navParams.get('thing1'),this.navParams.get('thing3'));
    this.platform.ready().then(() => {
      if (this.platform.is('ios')) {
        this.storageDirectory = this.file.documentsDirectory;
      }
      else if(this.platform.is('android')) {
        this.storageDirectory = this.file.externalDataDirectory;
      }
     
    });

  }
  presentAlert(texto){
    const alert = this.alertCtrl.create({
      title: texto,
      buttons: ['Dismiss']
    });
    alert.present();
  }
  viewerDocument(nombre,tipo){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.platform.ready().then(() => {
      const fileTransfer: FileTransferObject = this.transfer.create();
      this.tipo_file = encodeURI('http://sara.un-ocha.org/uploads/documentos/pdf/'+nombre);
      this.codigo = 'application/'+tipo;
      if(tipo != 'pdf'){
        this.tipo_file = encodeURI('http://sara.un-ocha.org/uploads/documentos/office/'+nombre);
        this.codigo = 'application/msword';
      }
      
      
      //this.presentAlert(url);
      //this.presentAlert(this.storageDirectory+nombre);
      fileTransfer.download(this.tipo_file, this.storageDirectory+nombre).then((entry) => {
        //this.presentAlert(entry.toURL());
        //this.document.viewDocument(entry.toURL(), 'application/pdf', options);
        loading.dismiss();
        this.fileOpener.open(entry.toURL(), 'application/'+tipo)
        .then(() => console.log('File is opened'))
        .catch(e => console.log('Error openening file', e));
      }, (error) => {
        //this.presentAlert(error.code);
      });
      });

  }
  busca(tipo,sub){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
    
    this.weatherProvider.getWeather(tipo,sub).
    subscribe(posts => {
      this.datos = posts.files;
      this.initializeItems();
      loading.dismiss();
      console.log(this.datos);
    });
  }

  goToTheDetail(item){
    this.navCtrl.push(DetailPage, {
      id: item
    });
  }
  initializeItems() {
    this.items = this.datos;
  }
  toggleSearchbar() {
    this.showSearchbar = !this.showSearchbar;
  }
  getItems(ev: any) {

    this.initializeItems();
    let val = ev.target.value;
    console.log(this.items);
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
        
      });


    }
  }
  onPress() {
    console.log('pressed');
  } 
  regularShare(nombre, nombre2, tipo){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.platform.ready().then(() => {
      const fileTransfer: FileTransferObject = this.transfer.create();
      this.tipo_file = encodeURI('http://sara.un-ocha.org/uploads/documentos/pdf/'+nombre);
      if(tipo != 'pdf'){
        this.tipo_file = encodeURI('http://sara.un-ocha.org/uploads/documentos/office/'+nombre);
      }
      fileTransfer.download(this.tipo_file, this.storageDirectory+nombre).then((entry) => {
        loading.dismiss();
         // share(message, subject, file, url)
        this.socialSharing.share("This a file shared from Emergency Kit APP by OCHA ROLAC", nombre2, entry.toURL(), null); 
      }, (error) => {});
      });
  }
  presentActionSheet(nombre, nombre2, tipo) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'File options',
      buttons: [
        {
          text: 'Download',
          icon: 'download',
          handler: () => {
            this.viewerDocument(nombre,tipo);
          }
        },{
          text: 'Share',
          icon: 'share',
          handler: () => {
            this.regularShare(nombre, nombre2,tipo);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }

}
