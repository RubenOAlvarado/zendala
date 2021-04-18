import { Injectable } from '@nestjs/common';
import { CreateChargeInput } from './dto/create-charge.input';
import { LookStoresArgs } from './dto/look-stores.args';

@Injectable()
export class StoresService {

  createChargeInStore(createChargeInput: CreateChargeInput) {
    return 'This action adds a new store';
  }

  findAll(args:LookStoresArgs) {
    return `This action returns all stores`;
  }

}
