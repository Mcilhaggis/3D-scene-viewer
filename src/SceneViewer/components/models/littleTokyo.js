import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './setupModel.js';

async function loadLittleTokyo() {
    const loader = new GLTFLoader();

    const littleTokyoData = await loader.loadAsync('./assets/models/littleTokyo.glb')

    console.log(littleTokyoData)
    const littleTokyo = setupModel(littleTokyoData)
    return littleTokyo;
}

export { loadLittleTokyo };