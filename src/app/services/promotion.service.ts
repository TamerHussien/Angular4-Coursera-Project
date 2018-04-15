import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { resolve } from 'url';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseURL } from '../shared/baseurl';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class PromotionService {

  constructor(private restangular: Restangular, private ProcessHTTPMSg: ProcessHTTPMsgService) {

  }

  getPromotions(): Observable<Promotion[]> {
    return this.restangular.all('promotions').getList();
  }

  getPromotion(id: number): Observable<Promotion> {

    return  this.restangular.one('promotions', id).get();

  }

  getFeaturedPromotion(): Observable<Promotion> {

    return this.restangular.all('promotions').getList({featured: true})
              .map(promotions => promotions[0]);

  }
}
