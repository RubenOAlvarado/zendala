import { InputType, Field } from '@nestjs/graphql';
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, MaxLength, ValidateNested } from 'class-validator';

@InputType()
class AddressInput{
  @Field({
      description: 'Customer address first line (street and ext. number)'
  })
  @IsNotEmpty()
  @IsString()
  line1: string;

  @Field({
      description: 'Customer address second line (optional - delgation or municipality or town)',
      nullable: true
  })
  @IsOptional()
  @IsString()
  line2?: string;

  @Field({
      description: 'Customer address line 3 (optional - suburb or colony)',
      nullable: true
  })
  @IsOptional()
  @IsString()
  line3?: string;

  @Field({
      description: 'Customer postal code'
  })
  @IsNotEmpty()
  @IsString()
  postal_code: string;

  @Field({
      description: 'Customer state address'
  })
  @IsNotEmpty()
  @IsString()
  state: string;

  @Field({
      description: 'Customer city address'
  })
  @IsNotEmpty()
  @IsString()
  city: string;

  @Field({
      description: 'Customer country code (ex: MX, US)',
      defaultValue: 'MX'
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(2, {message: 'Country code must be 2 chars max'})
  country_code: string;
}


@InputType()
export class CreateCustomerInput {
  @Field({ description: 'Customer name' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100, { message: 'Name must be under 100 chars'})
  name: string;

  @Field({description: 'Customer last name (it is optional)', nullable: true})
  @IsOptional()
  @MaxLength(100, {message: 'Last name must be under 100 chars'})
  last_name?: string;

  @Field({description: 'Customer email'})
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MaxLength(100, {message: 'Email must be under 100 chars'})
  email: string;

  @Field({
    description: 'Customer needs an account? (true if so, default false)', 
    nullable: true
  })
  @IsOptional()
  @IsBoolean()
  requires_account?: boolean;

  @Field({
    description: 'Customer phone number (it is optional)',
    nullable: true
  })
  @IsOptional()
  @IsString()
  @IsPhoneNumber(null)
  phone_number?: string;

  @Field( type => AddressInput, {
    description:'Customer address (is optional)',
    nullable: true
  })
  @IsOptional()
  @ValidateNested()
  address?: AddressInput; 
}
