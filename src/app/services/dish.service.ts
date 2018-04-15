import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class DishService {

  constructor(private http: Http, private processHTTPMsgService: ProcessHTTPMsgService) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get(baseURL + 'dishes').map( res => this.processHTTPMsgService.extractData(res));
  }

  getDish(id: number): Observable<Dish> {

    return this.http.get(baseURL + 'dishes/' + id)
               .map( res => this.processHTTPMsgService.extractData(res))
                . catch(error => this.processHTTPMsgService.handleError(error));

  }

  getFeaturedDish(): Observable<Dish> {

    return this.http.get(baseURL + 'dishes?featured=true')
        .map( res => this.processHTTPMsgService.extractData(res)[0])
        . catch(error => this.processHTTPMsgService.handleError(error));


  }
  getDishIds(): Observable<number[]> {
    return this.getDishes()
    .map(dishes => dishes.map(dish => dish.id ))
    . catch(error => this.processHTTPMsgService.handleError(error));
}

}
