import { ArgsType, Field, Float } from "@nestjs/graphql";
import { IsLatitude, IsLongitude, IsNotEmpty, IsNumber } from "class-validator";

@ArgsType()
export class LookStoresArgs{
    @Field((type) => Float, {
        description: 'Latitude where will look the stores'
    })
    @IsNotEmpty()
    @IsNumber()
    @IsLatitude({message: 'The input value must be a latitude'})
    lat: number;

    @Field((type) => Float, {
        description: 'Longitude where will look the stores'
    })
    @IsNotEmpty()
    @IsNumber()
    @IsLongitude({message: 'The input value must be a longitude'})
    lon: number;

    @Field((type) => Float, {
        description: 'Radio kilometers distance of the search'
    })
    @IsNotEmpty()
    @IsNumber()
    radio: number;

    @Field((type) => Float,{
        description: 'Bill amount'
    })
    @IsNotEmpty()
    @IsNumber()
    amount: number;
}