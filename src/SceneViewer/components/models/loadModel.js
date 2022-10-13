import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './setupModel.js';

async function loadModel({glbSourceFileLocation, modelPositionX, modelPositionY, modelPositionZ}) {
    console.log("loading model")
    const loader = new GLTFLoader();

    const [modelData] = await Promise.all([
        loader.loadAsync('./assets/models/'+ glbSourceFileLocation),
    ]);

    const model = setupModel(modelData)

    model.position.set(modelPositionX, modelPositionY, modelPositionZ)
    return {model}

}

export { loadModel };