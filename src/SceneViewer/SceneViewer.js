import { LittleTokyo } from './components/models/littleTokyo.js';

import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
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

class SceneViewer {
    // 1. Create an instance of the World app
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();

        const controls = createControls(camera, renderer.domElement);
        controls.addEventListener('change', () => {
            this.render();
        });
        loop = new Loop(camera, scene, renderer);

        container.append(renderer.domElement);

        const cube = createCube();
        const { ambientLight, mainLight } = createLights();

        // Disbled rotation animation
        // loop.updatables.push(cube);

        // Enabled damping animation
        loop.updatables.push(controls);

        scene.add(ambientLight, mainLight, cube);

        const resizer = new Resizer(container, camera, renderer);
    }

    async init() {
        // asynchronous setup here
        // load models
        await LittleTokyo();

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