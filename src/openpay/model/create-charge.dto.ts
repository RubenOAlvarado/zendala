import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CreateCustomerDTO } from "./create-customer.dto";

export class CreateChargeDTO{
    @IsNotEmpty()
    @IsString()
    method: string;

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    order_id: string;

    @IsNotEmpty()
    @IsDateString()
    due_date: string;

    @IsNotEmpty()
    customer: CreateCustomerDTO;
}