import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeController } from './coffee/coffee.controller';
import { CoffeeServiceService } from './coffee-service/coffee-service.service';
import { CoffeeModule } from './coffee/modules/coffee/coffee.module';

@Module({
  imports: [CoffeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
