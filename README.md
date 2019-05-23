# Base Builder (working title)

## Motivation

To build a fully (and easily-ish) configurable base building game. This idea was inspired by [Ludeon Studios and Tynan Sylvester's Rimworld](https://rimworldgame.com/). I have many hours in Rimworld but I'm far more interested in the base building aspect of the game than the story telling aspect. There's a lot of lore your world creates as you play Rimworld and it doesn't add much to the experience for me. The grind for resources and upgrading/expanding my base is what I'm looking for.

Another motivation for building this game is to have a game that is 100% modular. The idea is there will be some suggested default configurations, but you can edit it however you like. If you're an hour into your game and you want to adjust stuff on the fly, you should be able to. This will increase initial load times, but it's a tradeoff I'm willing to make to be able to adjust my current game on the fly.

My final motivation was to try creating a game in Javascript. I love Javascript (and now Typesript) but HTML5 games are relatively new compared to other engines. Originially I thought I would have to create an entire game engine from scratch, but luckily I found [Excalibur](https://excaliburjs.com/)!

## Tech

- Typescript and Excalibur
- TypeDoc for documentation

## TODO _(to be expanded)_

- All that init stuff
- Basic types n stuff
- Terrain
  - Generation and rendering
  - Configuration
- Resources
  - UI
  - Configuration
- Loading
  - Load configurations in whatever order makes sense
  - Configuration error handling
- Ability to select all game items and UI that shows info and actions

## Nice to haves _(to be expanded)_

- VSC workspace plugin that hides core files and makes everything less confusing
