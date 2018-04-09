import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable()
export class PromotionService {

  constructor() { }
  getPromotions(): Promise<Promotion[]> {
    return Promise.resolve(PROMOTIONS);
  }

  getPromotion(id: number): Promise<Promotion> {

    return Promise.resolve(PROMOTIONS.filter((dish) => dish.id === id)[0]);

  }

  getFeaturedPromotion(): Promise<Promotion> {

    return Promise.resolve(PROMOTIONS.filter((dish) => dish.featured)[0]);

  }
}
