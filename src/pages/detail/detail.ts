import { Component } from '@angular/core';
import { IonicPage, Platform, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DetailProvider } from '../../providers/detail/detail';
import { ActionSheetController, AlertController  } from 'ionic-angular';
import { FileOpener } from '@ionic-native/file-opener';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
  providers: [FileTransfer, FileTransferObject, File]
})
export class DetailPage {
  datos: any;
  id;
  storageDirectory: string = '';
  constructor(public fileOpener: FileOpener, public alertCtrl: AlertController, public transfer: FileTransfer, public platform: Platform, public file: File, public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private detailProvider:DetailProvider) {
    this.id = this.navParams.get('id');
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
  downloadFile(nombre) {
    this.platform.ready().then(() => {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = encodeURI('http://sara.un-ocha.org/uploads/documentos/pdf/'+nombre);

    fileTransfer.download(url, this.storageDirectory+nombre).then((entry) => {
      this.fileOpener.open(entry.toURL(), 'application/pdf')
      .then(() => console.log('File is opened'))
      .catch(e => console.log('Error openening file', e));
    }, (error) => {
      console.log('download complete: ' + error);
      this.presentAlert('Error en la descarga : ');
      this.presentAlert('Error code : ' + error.code);
      
    });
    });
  }
  ionViewWillEnter(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
    
    this.detailProvider.getDetail(this.id).
    subscribe(posts => {
      this.datos = posts.archivo;
      loading.dismiss();
      console.log(this.datos);
    });
  }
}