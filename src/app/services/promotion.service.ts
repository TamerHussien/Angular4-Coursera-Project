import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { resolve } from 'url';

@Injectable()
export class PromotionService {

  constructor() { }
  getPromotions(): Promise<Promotion[]> {
    return new Promise(resolve => {
        setTimeout(() => resolve(PROMOTIONS), 2000);
    });
  }

  getPromotion(id: number): Promise<Promotion> {

    return new Promise (resolve => {
      setTimeout(() => resolve(PROMOTIONS.filter((dish) => dish.id === id)[0])
                        , 2000);
    });

  }

  getFeaturedPromotion(): Promise<Promotion> {

    return new Promise (resolve => {
      setTimeout(() => resolve(PROMOTIONS.filter((dish) => dish.featured)[0]), 2000);
    });

  }
}
