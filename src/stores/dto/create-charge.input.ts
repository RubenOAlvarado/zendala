import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { UpdateCustomerInput } from 'src/customers/dto/update-customer.input';

@InputType()
export class CreateChargeInput {
    
    @Field((type) => String, {
      description: 'payment method, by default it is store',
      defaultValue: 'store'
    })
    @IsOptional()
    @IsString()
    method: string;

    @Field((type) => Number, {
      description: 'Charge amount'
    })
    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @Field((type) => String, {
      description: 'Charge description'
    })
    @IsNotEmpty()
    @IsString()
    description: string;

    @Field((type) => String, {
      description: 'Due date for the payment'
    })
    @IsNotEmpty()
    @IsDateString()
    due_date: string;

    @Field((type) => String, {
      description: 'customerID (optional)'
    })
    @IsNotEmpty()
    customer: string;
}
