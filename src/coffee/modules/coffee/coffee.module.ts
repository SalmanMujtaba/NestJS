import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeServiceService } from './../../../coffee-service/coffee-service.service';
import { Event } from './../../../events/entities/event.entity';
import { CoffeeController } from './../../coffee.controller';
import { Coffee } from './../../entities/coffee.entity';
import { Flavor } from './../../entities/flavor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeeController],
  providers: [CoffeeServiceService],
  exports: [CoffeeServiceService]
})
export class CoffeeModule { }
