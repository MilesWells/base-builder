import Resolver from './Resolver';

export default interface Terrain {
  arable: Resolver<boolean>;
  buildable: Resolver<boolean>;
  navigable: Resolver<boolean>;
}
