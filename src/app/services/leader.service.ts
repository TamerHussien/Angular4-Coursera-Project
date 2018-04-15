import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
@Injectable()
export class LeaderService {


  constructor(private http: Http, private processHTTPMsg: ProcessHTTPMsgService, ) { }

  getLeaders(): Observable<Leader[]> {

    return  this.http.get(baseURL + 'leaders').map(res => this.processHTTPMsg.extractData(res));
  }

  getLeader(id: number): Observable<Leader> {

    return this.http.get(baseURL + 'leaders' + id).map( res => this.processHTTPMsg.extractData(res));

  }

  getFeaturedLeader(): Observable<Leader> {

    return  this.http.get(baseURL + 'leaders?featured=true')
          .map(res =>   this.processHTTPMsg.extractData(res)[0]);
  }

}
