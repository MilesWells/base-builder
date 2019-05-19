import {Resolver, Vector} from '../base';

export default interface Item {
  buildable: Resolver<boolean>;
  movable: Resolver<boolean>;
  navigable: Resolver<boolean>;
  position: Resolver<Vector>;
  stackable: Resolver<boolean>;
  speed: Resolver<Vector>;
}
