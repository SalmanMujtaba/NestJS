import { Module } from '@nestjs/common';
import { CoffeeModule } from './../coffee/modules/coffee/coffee.module';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  imports: [CoffeeModule],
  controllers: [],
  providers: [CoffeeRatingService],
  exports: []
})

export class CoffeeRatingModule {
}
