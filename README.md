# Base Builder Engine (working title)

## Tech

- Typescript and Electron
- TypeDoc for documentation
- Standalone literally just has to pull the git repo, run yarn and the electron app
- Codegen for world items would be cool

## Basic World Mechanics

- Option of 2D or isomorphic
- Graphic packs for custom graphics
- Metric system (map in m<sup>2</sup> or m<sup>3</sup> and speed/position is a vector in the form of [x, y] m/s)
- Use multiple canvases for rendering

## TODO

- All that init stuff
- Basic types n stuff
- Game Loop
- Graphic Engine
  - Draw world items
  - Main UI
    - Select world items
    - Context menus that create events for the selected world item
    - Game speed adjustment
  - _to be expanded_
- Scenarios
  - Global properties and events that attach to the game loop
- Test and find good default scenarios
- Customizable graphics

## World Items

```typescript
type Terrain {
  arable: boolean;
  buildable: boolean;
  navigable: boolean;
}

type Object {
  movable: boolean;
  buildable: boolean;
  navigable: boolean;
  stackable: boolean;
  position: Vector;
  speed: Vector;
}

class Character {}
```

## **Isomorphic Engine**

To do. Much later.
