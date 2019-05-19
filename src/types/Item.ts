import Vector from './Vector';
import Resolver from './Resolver';

export default interface Item {
  movable: Resolver<boolean>;
  buildable: Resolver<boolean>;
  navigable: Resolver<boolean>;
  stackable: Resolver<boolean>;
  position: Resolver<Vector>;
  speed: Resolver<Vector>;
}
