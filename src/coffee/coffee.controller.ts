import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { CoffeeServiceService } from './../coffee-service/coffee-service.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeServiceService) {

  }
  @Get()
  findAll(@Query() paginationQuery) {
    //https://localhost/coffee/limit=20&offset=10
    const {limit, offset } = paginationQuery; 
    return this.coffeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeeService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDTO: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDTO);
    // return `This action creates a coffee`;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffe: UpdateCoffeeDto) {
    return this.coffeeService.update(id, updateCoffe );
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coffeeService.remove(id);
  }

  
}
