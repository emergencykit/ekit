import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DetailProvider {
  constructor(public http: Http) {
    console.log('Hello DetailProvider Provider');
  }
  getDetail(id){
    return this.http.get('http://sara.un-ocha.org/rckit_detail/'+id)
    .map(res => res.json());
  }

}

