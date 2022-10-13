import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './setupModel.js';

async function loadModel(source) {
    console.log("loading model")
    const loader = new GLTFLoader();
console.log(source)

    const [modelData] = await Promise.all([
        loader.loadAsync('./assets/models/'+ source),
    ]);

    const model = setupModel(modelData)
    console.log(modelData)
    model.position.set(0, 0, 2.5);

    return {model}

}

export { loadModel };