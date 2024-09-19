import { Application, Assets, Container, Sprite } from "pixi.js";
import { getAssetsByType } from "./utils/constants";

export class Game extends Container {
  constructor(app: Application) {
    super(); // Initialize the base Container class
    this.initialize(app);
  }

  private async initialize(app: Application) {
    // Creating the arrays based on the asset types
    const towerAssets: string[] = getAssetsByType("tower");
    const enemyAssets: string[] = getAssetsByType("enemy");
    const projectileAssets: string[] = getAssetsByType("projectile");

    // Load assets
    const bgTexture = await Assets.load("background_11");

    const bgSprite = new Sprite(bgTexture);
    this.addChild(bgSprite);
  }
}


