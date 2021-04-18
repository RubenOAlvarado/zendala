import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from 'mongoose';

@ObjectType()
@Schema()
export class Charge {
    @Field(type => String, {description: 'Charge mongo id'})
    _id: MongooseSchema.Types.ObjectId;

    @Field((type) => String, {
        description: 'payment method, by default it is store',
        defaultValue: 'store'
    })
    @Prop()
    method: string;
  
    @Field((type) => Number, {
        description: 'Charge amount'
    })
    @Prop()
    amount: number;
  
    @Field((type) => String, {
        description: 'Charge description'
    })
    @Prop()
    description: string;
  
    @Field((type) => String, {
        description: 'Due date for the payment'
    })
    @Prop()
    due_date: string;
}

export type ChargeDocument = Charge & Document;

export const ChargeSchema = SchemaFactory.createForClass(Charge);