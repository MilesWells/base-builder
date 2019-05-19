import {Resolver} from '../base';

export default interface Terrain {
  arable: Resolver<boolean>;
  buildable: Resolver<boolean>;
  navigable: Resolver<boolean>;
}
