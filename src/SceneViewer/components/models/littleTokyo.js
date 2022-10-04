import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

async function loadLittleTokyo() {
  const loader = new GLTFLoader();

  const littleTokyoData = await loader.loadAsync('/assets/models/littleTokyo.glb')

  console.log(littleTokyoData)
}

export { loadLittleTokyo };