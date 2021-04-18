import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { ChargeResponseDTO } from './model/charge-response.dto';
import { CreateChargeDTO } from './model/create-charge.dto';
import { CreateCustomerDTO } from './model/create-customer.dto';
import { UpdateCustomerDTO } from './model/update-customer.dto';
import Openpay = require('openpay');
import 'dotenv/config';

@Injectable()
export class OpenpayService {
    openpay = null;
    constructor(){
        this.openpay = new Openpay(process.env.MERCHANTID, process.env.OPPRIVATEKEY);
    }

    private readonly logger = new Logger(OpenpayService.name);

    async createCustomer(createCustomerDTO: CreateCustomerDTO):Promise<Boolean>{
        try {
            this.logger.debug('Creating new customer in openpay');
            await this.openpay.customers.create(createCustomerDTO);
            this.logger.debug('Customer created');
            return true;
        } catch (e) {
            this.logger.error(`Error creating customer in openpay: ${e}`);
            throw new InternalServerErrorException('Error creating customer in openpay');
        }
    }

    async updateCustomer(updateCustomerDTO: UpdateCustomerDTO):Promise<Boolean>{
        try {
            this.logger.debug('Updating customer in openpay');
            await this.openpay.customers.update(updateCustomerDTO);
            this.logger.debug('Customer updated');
            return true;
        } catch (e) {
            this.logger.debug(`Error updating customer in openpay: ${e}`);
            throw new InternalServerErrorException('Error updating customer in openpay'); 
        }
    }

    async readCustomer(id:string):Promise<CreateCustomerDTO>{
        try {
            this.logger.debug('Looking customer in openpay');
            const customer = await this.openpay.customers.get(id);
            if(!customer) throw new NotFoundException('Customer not found');
            this.logger.debug('Customer found');
            return customer;
        } catch (e) {
            this.logger.debug(`Error looking customer in openpay: ${e}`);
            throw new InternalServerErrorException('Error looking customer in openpay'); 
        }
    }

    async deleteCustomer(id:string):Promise<void>{
        try {
            this.logger.debug('Deleting customer in openpay');
            await this.openpay.customers.get(id);
            this.logger.debug('Customer deleted');
        } catch (e) {
            this.logger.debug(`Error deleting customer in openpay: ${e}`);
            throw new InternalServerErrorException('Error deleting customer in openpay'); 
        }
    }

    async createCharge(customerId:string, createChargeDTO: CreateChargeDTO):Promise<ChargeResponseDTO>{
        try {
            this.logger.debug('Creating store charge in openpay');
            return await this.openpay.customers.charges.create(customerId, createChargeDTO);
        } catch (e) {
            this.logger.debug(`Error creating charge in openpay: ${e}`);
            throw new InternalServerErrorException('Error creating charge in openpay'); 
        }
    }

    async getStores(lat:string, lon: string, radio: string):Promise<Record<string, any>>{
        try {
            this.logger.debug('Looking stores in parameters sended');
            return (await axios.get(`https://api.openpay.mx/stores?latitud=${lat}&longitud=${lon}&kilometers=${radio}`)).data;
        } catch (e) {
            this.logger.error(`Error looking stores: ${e}`);
            throw new NotFoundException('Error looking stores');
        }
    }
}
