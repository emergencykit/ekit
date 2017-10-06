import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { FileOpener } from '@ionic-native/file-opener';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';
import { AboutPage } from '../pages/about/about';
import { SubcarpetaPage } from '../pages/subcarpeta/subcarpeta';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WeatherProvider } from '../providers/weather/weather';
import { DetailProvider } from '../providers/detail/detail';
import { SocialSharing } from '@ionic-native/social-sharing';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    AboutPage,
    SubcarpetaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SubcarpetaPage,
    DetailPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider,
    FileOpener,
    DocumentViewer,
    DetailProvider,
    SocialSharing
  ]
})
export class AppModule {}
