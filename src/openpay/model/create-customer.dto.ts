import { IsBoolean, IsEmail, IsMongoId, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, MaxLength, ValidateNested } from "class-validator";
import { AddressDTO } from "./create-address.dto";

export class CreateCustomerDTO{

    @IsOptional()
    @IsString()
    @IsMongoId()
    external_id: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100, { message: 'Name must be under 100 chars'})
    name: string;

    @IsOptional()
    @MaxLength(100, {message: 'Last name must be under 100 chars'})
    last_name?: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @MaxLength(100, {message: 'Email must be under 100 chars'})
    email: string;

    @IsOptional()
    @IsBoolean()
    requires_account?: boolean;

    @IsOptional()
    @IsString()
    @IsPhoneNumber(null)
    phone_number?: string;

    @IsOptional()
    @ValidateNested()
    address?: AddressDTO; 
}