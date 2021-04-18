import { Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresResolver } from './stores.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Charge, ChargeSchema } from './models/charge.model';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Charge.name,
      schema: ChargeSchema
    }])
  ],
  providers: [StoresResolver, StoresService]
})
export class StoresModule {}
