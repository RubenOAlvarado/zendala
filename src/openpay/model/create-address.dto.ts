import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class AddressDTO{
    @IsNotEmpty()
    @IsString()
    line1: string;

    @IsOptional()
    @IsString()
    line2?: string;

    @IsOptional()
    @IsString()
    line3?: string;

    @IsNotEmpty()
    @IsString()
    postal_code: string;

    @IsNotEmpty()
    @IsString()
    state: string;

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(2, {message: 'Country code must be 2 chars max'})
    country_code: string;
}