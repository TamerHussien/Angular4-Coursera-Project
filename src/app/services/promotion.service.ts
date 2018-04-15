import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { resolve } from 'url';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseURL } from '../shared/baseurl';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class PromotionService {

  constructor(private http: Http, private ProcessHTTPMSg: ProcessHTTPMsgService) { }
  getPromotions(): Observable<Promotion[]> {
    return this.http.get(baseURL + 'promotions').map(res => this.ProcessHTTPMSg.extractData(res))
                .catch(error => this.ProcessHTTPMSg.handleError(error));
  }

  getPromotion(id: number): Observable<Promotion> {

    return  this.http.get(baseURL + 'promotions' + id).map(res => this.ProcessHTTPMSg.extractData(res))
    .catch(error => this.ProcessHTTPMSg.handleError(error));

  }

  getFeaturedPromotion(): Observable<Promotion> {

    return this.http.get(baseURL + 'promotions?featured=true').map(res => this.ProcessHTTPMSg.extractData(res)[0])
    .catch(error => this.ProcessHTTPMSg.handleError(error));

  }
}
