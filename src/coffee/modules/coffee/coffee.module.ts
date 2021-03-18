import { CoffeeServiceService } from './../../../coffee-service/coffee-service.service';
import { CoffeeController } from './../../coffee.controller';
import { Module } from '@nestjs/common';

@Module({controllers: [CoffeeController], providers: [CoffeeServiceService]})
export class CoffeeModule {}
