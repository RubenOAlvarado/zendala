import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersResolver } from './customers.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Customer, CustomerSchema } from './models/customer.model';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Customer.name,
        schema: CustomerSchema
      }
    ]),
  ],
  providers: [CustomersResolver, CustomersService]
})
export class CustomersModule {}
