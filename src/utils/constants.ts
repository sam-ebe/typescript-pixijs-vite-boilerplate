export const ASSETS = [
  { alias: "background_1", src: "assets/images/background_1.png" },
  { alias: "background_11", src: "assets/images/background_11.png" },
  { alias: "tower_1", src: "assets/images/tower_1.png" },
  { alias: "enemy_1", src: "assets/images/enemy_1.png" },
  { alias: "enemy_2", src: "assets/images/enemy_2.png" },
  { alias: "projectile_1", src: "assets/images/projectile_1.png" },
  { alias: "projectile_2", src: "assets/images/projectile_2.png" },
];

// Filter assets by keyword in alias
export const getAssetsByType = (type: string) => {
  return ASSETS.filter((asset) => asset.alias.includes(type)).map(
    (asset) => asset.alias
  );
};

export const CANVAS_WIDTH: number = 720;
export const CANVAS_HEIGHT = 1280;