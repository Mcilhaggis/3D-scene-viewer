import { loadLittleTokyo } from './components/models/littleTokyo.js';
import { loadFlamingo } from './components/models/flamingo.js';

import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;
let controls;




class SceneViewer {
    // 1. Create an instance of the World app
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        controls = createControls(camera, renderer.domElement);
        controls.addEventListener('change', () => {
            this.render();
        });

        loop = new Loop(camera, scene, renderer);

        container.append(renderer.domElement);
        const { ambientLight, mainLight } = createLights();

        // Enabled damping animation
        loop.updatables.push(controls);

        scene.add(ambientLight, mainLight);

        const resizer = new Resizer(container, camera, renderer);
    }



    async init() {
        // asynchronous setup here to load models
        // const { littleTokyo } = await loadLittleTokyo();
        // scene.add(littleTokyo)
        const { flamingo } = await loadFlamingo();
        controls.target.copy(flamingo.position);

        scene.add(flamingo)
    }

    render() {
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }
}


export { SceneViewer };