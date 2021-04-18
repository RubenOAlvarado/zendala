import { PartialType } from "@nestjs/graphql";
import { CreateCustomerDTO } from "./create-customer.dto";

export class UpdateCustomerDTO extends PartialType(CreateCustomerDTO){}