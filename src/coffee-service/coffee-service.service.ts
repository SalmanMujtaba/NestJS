import { CreateCoffeeDto } from './../coffee/dto/create-coffee.dto';
import { CoffeeEnitty } from './../coffee/entities/coffee.entity';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CoffeeServiceService {
  private coffees: CoffeeEnitty[] = [
    {
      id: 1,
      name: "sample",
      brand: "brand",
      flavors: ["strawberry", "vanilla"]
    }
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    return this.coffees.find(item => item.id === +id) || this.notFounderror(id);
  }

  notFounderror(id: string) {
    throw new NotFoundException(`Not found ${id}`);
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
