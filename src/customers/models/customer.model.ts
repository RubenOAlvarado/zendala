import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from 'mongoose';

@ObjectType()
class Address{

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
@Schema()
export class Customer{
    @Field(type => String, {description: 'Customer mongo id'})
    _id: MongooseSchema.Types.ObjectId;

    @Field((type) => String, {description: 'Customer name'})
    @Prop({required: true})
    name: string;

    @Field((type) => String, {
        description: 'Customer lastname (optional)',
        nullable: true
    })
    @Prop()
    last_name?: string;

    @Field((type) => String, {
        description: 'Customer email'
    })
    @Prop()
    email:string;

    @Field((type) => Boolean, {
        description: 'Check if the customer needs an account in openpay',
        nullable:true
    })
    @Prop({nullable:true})
    requires_account?: boolean;

    @Field(() => String, {
        description: 'Customer phone number (optional)',
        nullable: true
    })
    @Prop({nullable: true})
    phone_number?: string;

    @Field(type => Address, {
        description: 'Customer address object (optional)',
        nullable: true
    })
    @Prop(raw({
        line1: {type: String, required: true },
        line2: { type: String, required: false },
        line3: { type: String, required: false },
        postal_code: { type: String, required: true },
        state: { type: String, required: true },
        city: { type: String, required: true },
        country_code: { type: String, required: true, default: 'MX' }
    }))
    address?: Address;
}

export type CustomerDocument = Customer & Document;

export const CustomerSchema = SchemaFactory.createForClass(Customer);