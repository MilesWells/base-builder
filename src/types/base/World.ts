import WorldOptions from './WorldOptions';
import {Terrain} from '../worldItems';

class BaseTerrain implements Terrain {
  arable = true;
  buildable = true;
  navigable = true;

  tickEvent = () => {};
}

export default class World {
  terrain: Terrain[][] = [];
  constructor(options: WorldOptions) {
    const {worldSize} = options;
    for (let x = 0; x <= worldSize.x; x++) {
      let col: Terrain[] = [];
      for (let y = 0; y <= worldSize.y; y++) {
        col.push(new BaseTerrain());
      }
      this.terrain.push(col);
    }
  }
}
