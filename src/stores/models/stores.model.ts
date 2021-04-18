import { Field, Float, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Store{
    @Field((type) => ID, {
        description:'Unique store id'
    })
    id_store: string;

    @Field((type) => String, {
        description: 'Unique merchant id'
    })
    id: string;

    @Field((type) => String, {
        description: 'Stores name'
    })
    name: string;

    @Field((type) => String, {
        description: 'Stores last update date'
    })
    last_update: string;

    @Field((type) => Geolocation, {
        description: 'Stores graphic representation'
    })
    geolocation: Geolocation;

    @Field((types) => Address, {
        description: 'Store address'
    })
    address: Address;

    @Field((type) => PaynetChain, {
        description: 'Paynet chain that the store belongs'
    })
    paynet_chain: PaynetChain;
}

@ObjectType()
class Geolocation{
    @Field((type) => Float, {
        description: 'Stores longitud'
    })
    lng: number;

    @Field((type) => Float, {
        description: 'Stores latitude'
    })
    lat: number;

    @Field((type) => String, {
        description: 'Unique google maps id'
    })
    place_id: string;
}

@ObjectType()
export class Address{
    @Field((type) => String, {
        description: 'Customer address first line (street and ext. number)'
    })
    line1: string;

    @Field((type) => String,{
        description: 'Customer address second line (optional - delgation or municipality or town)',
        nullable: true
    })
    line2?: string;

    @Field((type) => String,{
        description: 'Customer address line 3 (optional - suburb or colony)',
        nullable: true
    })
    line3?: string;

    @Field((type) => String,{
        description: 'Customer postal code'
    })
    postal_code: string;

    @Field((type) => String,{
        description: 'Customer state address'
    })
    state: string;

    @Field((type) => String,{
        description: 'Customer city address'
    })
    city: string;

    @Field((type) => String, {
        description: 'Customer country code (ex: MX, US)',
        defaultValue: 'MX'
    })
    country_code: string;
}

@ObjectType()
class PaynetChain{
    @Field((type) => String, {
        description: 'Chain name'
    })
    name: string;

    @Field((type) => String, {
        description: 'Url logo image'
    })
    logo: string;

    @Field((type) => String, {
        description: 'Url logo thumbnail'
    })
    thumb: string;

    @Field((type) => Float, {
        description: 'Max amount that accept stores'
    })
    max_amount: number;
}