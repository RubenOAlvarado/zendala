import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { CustomersModule } from './customers/customers.module';
import { OpenpayModule } from './openpay/openpay.module';
import { StoresModule } from './stores/stores.module';
import 'dotenv/config';

@Module({
  imports: [
    /*MongooseModule.forRoot(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    ),*/
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql'
    }),
    CustomersModule,
    OpenpayModule,
    StoresModule
  ],
})
export class AppModule {}