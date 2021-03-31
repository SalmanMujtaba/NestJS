import { Injectable } from '@nestjs/common';
import { CoffeeServiceService } from './../coffee-service/coffee-service.service';

@Injectable()
export class CoffeeRatingService {
  constructor(private readonly coffeeService: CoffeeServiceService) {
  }
}
