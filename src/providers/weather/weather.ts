import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apikey = '';
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url;

  }
  getWeather(tipo,sub){
    return this.http.get("http://sara.un-ocha.org/mobile_files/"+tipo+"/"+sub)
    .map(res => res.json());
  }

  getSubCarpetas(tipo){
    return this.http.get("http://sara.un-ocha.org/rckit_subcarpetas/"+tipo)
    .map(res => res.json());
  }

}
