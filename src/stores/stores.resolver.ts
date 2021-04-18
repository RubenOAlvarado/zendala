import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StoresService } from './stores.service';
import { Charge } from './models/charge.model';
import { CreateChargeInput } from './dto/create-charge.input';
import { LookStoresArgs } from './dto/look-stores.args';
import { Store } from './models/stores.model';

@Resolver(() => Charge)
export class StoresResolver {
  constructor(private readonly storesService: StoresService) {}

  @Mutation(() => Charge)
  createChargeInStore(@Args('createChargeInput') createChargeInput: CreateChargeInput) {
    return this.storesService.createChargeInStore(createChargeInput);
  }

  @Query(() => [Store], { name: 'stores' })
  findAll(@Args() args: LookStoresArgs) {
    return this.storesService.findAll(args);
  }
  
}
