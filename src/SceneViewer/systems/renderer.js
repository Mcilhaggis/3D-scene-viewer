import { WebGLRenderer } from 'three';

//   Using meters is a convention rather than a rule. If you don’t follow it, everything except for physically accurate lighting will still work

// Light types: 
// DirectionalLight => Sunlight
// PointLight => Light Bulbs
// RectAreaLight => Strip lighting or bright windows
// SpotLight => Spotlights

function createRenderer() {
    const renderer = new WebGLRenderer({ antialias: true });

  // turn on the physically correct lighting model
  renderer.physicallyCorrectLights = true;


  return renderer;
}

export { createRenderer };