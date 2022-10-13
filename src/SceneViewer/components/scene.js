import { Color, Scene } from 'three';

function createScene({backgroundColour}) {
  const scene = new Scene();

  scene.background = new Color(backgroundColour);

  return scene;
}

export { createScene };