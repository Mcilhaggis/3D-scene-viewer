import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './setupModel.js';

async function loadFlamingo(source) {
    console.log("loading flamingo")
    const loader = new GLTFLoader();
console.log(source)

    const [flamingoData] = await Promise.all([
        loader.loadAsync('./assets/models/'+ source),
    ]);

    const flamingo = setupModel(flamingoData)
    console.log(flamingoData)
    flamingo.position.set(0, 0, 2.5);

    return {flamingo}

}

export { loadFlamingo };