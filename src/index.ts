// src/index.ts

import { Application, Assets } from "pixi.js";
import "./style.scss";
import { Game } from "./Game";
import { ASSETS, CANVAS_WIDTH, CANVAS_HEIGHT } from "./utils/constants";

const main = async () => {
  // Create a new application
  const app = new Application();

  await app.init({
    width: window.innerWidth,
    height: window.innerHeight,
    background: "#1099bb",
    resizeTo: window,
    resolution: devicePixelRatio,
  });

  // Then adding the application's canvas to the DOM body.
  document.body.appendChild(app.canvas);

  // Load assets
  await Assets.load(ASSETS);

  // Create a Game (which is a container) and add it to the stage
  const game = new Game(app);
  app.stage.addChild(game);

  // Handle resizing to make sure the game fits and is centered
  window.addEventListener("resize", () => onResize(game));
  onResize(game); // Initial resize to fit the screen
};

// Resizing function to maintain the 720x1280 aspect ratio
function onResize(game: Game) {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const windowAspectRatio = windowWidth / windowHeight;
  const gameAspectRatio = CANVAS_WIDTH / CANVAS_HEIGHT;

  // Adjust the scale of the game to fit within the canvas while maintaining the aspect ratio
  let scale = 1;

  if (windowAspectRatio > gameAspectRatio) {
    // scale by height
    scale = windowHeight / CANVAS_HEIGHT;
  } else {
    // scale by width
    scale = windowWidth / CANVAS_WIDTH;
  }

  game.scale.set(scale);

  // Center game on the canvas
  game.x = (windowWidth - CANVAS_WIDTH * scale) / 2;
  game.y = (windowHeight - CANVAS_HEIGHT * scale) / 2;
}

main();
