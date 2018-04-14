import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]> {
    return Observable.of(DISHES).delay(2000);
  }

  getDish(id: number): Observable<Dish> {

    return Observable.of(DISHES.filter((dish) => dish.id === id)[0]).delay(2000);

  }

  getFeaturedDish(): Observable<Dish> {

    return Observable.of(DISHES.filter((dish) => dish.featured)[0]).delay(2000);

  }
  getDishIds(): Observable<number[]> {
    return this.getDishes()
    .map(dishes => dishes.map(dish => dish.id ))
    .catch(error => Observable.of(error));
}

}
