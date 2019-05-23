import {Engine, DisplayMode, Loader, Color} from 'excalibur';

import TheOne from './scenes/the-one/the-one';
import Resources from './resources';

class Game extends Engine {
  constructor() {
    super({
      width: 800,
      height: 600,
      displayMode: DisplayMode.FullScreen,
      backgroundColor: Color.White,
      suppressPlayButton: true // @audio remove this
    });
  }

  public start(loader: ex.Loader) {
    return super.start(loader);
  }
}

const game = new Game();
const theOne = new TheOne(game);

// levelOne.add(player);

game.add('theOne', theOne);

let loader = new Loader();
for (let key in Resources) {
  loader.addResource(Resources[key]);
}

game.start(loader).then(() => {
  // game.goToScene('levelOne');
});
